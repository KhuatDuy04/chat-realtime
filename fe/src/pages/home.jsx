import { useEffect, useRef, useState } from "react";
import SideBar from "./../components/layout/SideBar";
import { Button, Form, Input, notification } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import { sendMessage } from "../util/api";
import { useOutletContext } from "react-router-dom";
import emptyChat from "../assets/images/emty-chat.png";
import { useSocket } from "../components/context/socket.context";
import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";

const HomePage = () => {
  const { auth } = useContext(AuthContext);
  const { onlineUsers } = useOutletContext();
  const [message, setMessage] = useState([]);
  const [receiver, setReceiver] = useState([]);
  const [form] = Form.useForm();
  const { socket } = useSocket();
  const messageEndRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);

  const groupedMessages = [];
  let currentGroup = null;

  message
    .slice()
    .reverse()
    .forEach((msg) => {
      if (!currentGroup || currentGroup.senderId !== msg.senderId) {
        currentGroup = {
          senderId: msg.senderId,
          messages: [msg],
        };
        groupedMessages.push(currentGroup);

        const inputEl = document.querySelector(".tyn-chat-form-input");
        if (inputEl) inputEl.focus();
      } else {
        currentGroup.messages.push(msg);
      }
    });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onFinish = async (values) => {
    const { message: text } = values;
    if (!text || text.trim() === "") return;

    try {
      const res = await sendMessage(text, receiver._id, imageFile);

      const newMsg = {
        senderId: auth.user._id,
        receiverId: receiver._id,
        text,
        image: imageFile,
        createdAt: new Date().toISOString(),
      };

      const newNoti = {
        senderId: auth.user._id,
        receiverId: receiver._id,
        text,
        type: "message",
        is_read: false,
        createdAt: new Date().toISOString(),
      };

      socket.emit("chat message", newMsg);
      socket.emit("notification new", newNoti);

      if (res) {
        notification.success({
          message: "Gửi tin nhắn thành công",
          description: "Success",
        });
        form.resetFields(["message"]);
        setImageFile(null);
      }
    } catch (err) {
      notification.error({
        message: "Lỗi khi gửi tin nhắn",
        description: err.message,
      });
    }
  };

  useEffect(() => {
    if (!socket) return;

    socket.on("chat message", (msg) => {
      setMessage((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chat message");
    };
  }, [socket]);

  useEffect(() => {
    if (messageEndRef.current && message) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);

  useEffect(() => {
    // tooltip
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });

    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, [message]);

  return (
    <>
      <SideBar
        setMessage={setMessage}
        setReceiver={setReceiver}
        onlineUsers={onlineUsers}
      />
      {/* {console.log("data ben home page:", message)}
            {console.log("nguoi nhan tin nhan ben home page:", sender)} */}
      {receiver.length !== 0 ? (
        <div className="tyn-main tyn-chat-content" id="tynMain">
          <div className="tyn-chat-head">
            <ul className="tyn-list-inline d-md-none ms-n1">
              <li>
                <button className="btn btn-icon btn-md btn-pill btn-transparent js-toggle-main">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                  </svg>
                  {/* arrow-left */}
                </button>
              </li>
            </ul>
            <div className="tyn-media-group">
              <div className="tyn-media tyn-size-lg d-none d-sm-inline-flex">
                <img
                  src={
                    receiver?.profilePic != ""
                      ? receiver?.profilePic
                      : "../../src/assets/images/avatar/no-image.png"
                  }
                  alt=""
                />
              </div>
              {/* .tyn-media */}
              <div className="tyn-media tyn-size-rg d-sm-none">
                <img
                  src={
                    receiver?.profilePic != ""
                      ? receiver?.profilePic
                      : "../../src/assets/images/avatar/no-image.png"
                  }
                  alt=""
                />
              </div>
              {/* .tyn-media */}
              <div className="tyn-media-col">
                <div className="tyn-media-row">
                  <h6 className="name">{receiver?.name}</h6>
                </div>
                <div className="tyn-media-row has-dot-sap">
                  <span className="meta">Active</span>
                </div>
              </div>
              {/* .tyn-media-col */}
            </div>
            {/* .tyn-media-group */}
            <ul className="tyn-list-inline gap gap-3 ms-auto">
              <li className="d-none d-sm-block">
                <button className="btn btn-icon btn-light js-toggle-chat-search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                  {/* search */}
                </button>
              </li>
            </ul>
            {/* .tyn-list-inline */}
            <div className="tyn-chat-search" id="tynChatSearch">
              <div className="flex-grow-1">
                <div className="form-group">
                  <div className="form-control-wrap form-control-plaintext-wrap">
                    <div className="form-control-icon start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                      </svg>
                      {/* search */}
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-plaintext"
                      id="searchInThisChat"
                      placeholder="Search in this chat"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center gap gap-3">
                <ul className="tyn-list-inline ">
                  <li>
                    <button className="btn btn-icon btn-sm btn-transparent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-up"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                        />
                      </svg>
                      {/* chevron-up */}
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-icon btn-sm btn-transparent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                      {/* chevron-down */}
                    </button>
                  </li>
                </ul>
                <ul className="tyn-list-inline ">
                  <li>
                    <button className="btn btn-icon btn-md btn-light js-toggle-chat-search">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-x-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                      </svg>
                      {/* x-lg */}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* .tyn-chat-search */}
          </div>
          {/* .tyn-chat-head */}
          <div className="tyn-chat-body js-scroll-to-end" id="tynChatBody">
            <div className="tyn-reply" id="tynReply">
              {groupedMessages.map((group, groupIndex) => {
                const isMe = group.senderId !== auth.user._id;
                const isLast = groupIndex === 0;

                return (
                  <div
                    key={groupIndex}
                    className={`tyn-reply-item ${
                      isMe ? "incoming" : "outgoing"
                    }`}
                    ref={isLast ? messageEndRef : null}
                  >
                    {/* avatar chỉ hiện với đối phương */}
                    {isMe && (
                      <div className="tyn-reply-avatar">
                        <div className="tyn-media tyn-size-md tyn-circle">
                          <img
                            src={
                              receiver?.profilePic != ""
                                ? receiver?.profilePic
                                : "../../src/assets/images/avatar/no-image.png"
                            }
                            alt=""
                          />
                        </div>
                      </div>
                    )}

                    <div className="tyn-reply-group">
                      <div className="d-flex flex-column">
                        {group.messages.reverse().map((msg, index) => (
                          <div key={index} className="mb-3 d-flex flex-column">
                            {msg.text && (
                              <div
                                className="d-inline-block bg-light rounded-3 p-2 shadow-sm align-self-start"
                                style={{ maxWidth: "250px" }}
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title={new Date(
                                  msg.createdAt
                                ).toLocaleTimeString("vi-VN", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              >
                                <span>{msg.text}</span>
                              </div>
                            )}

                            {msg.image && (
                              <img
                                src={msg.image}
                                alt="img"
                                className="img-fluid rounded-3 mt-2 mb-2"
                                style={{ maxWidth: "200px" }}
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title={new Date(
                                  msg.createdAt
                                ).toLocaleTimeString("vi-VN", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* .tyn-reply */}
          </div>
          {/* .tyn-chat-body */}

          <Form
            layout="vertical"
            className="tyn-chat-form d-flex flex-column rounded-4 pt-3 bg-secondary-subtle"
            onFinish={onFinish}
            autoComplete="off"
            form={form}
            style={{width: '100%', maxWidth: '1200px', margin: '0 auto'}}
          >
            {imageFile && (
              <div className="mb-3 px-3 align-self-start" style={{marginLeft: '60px'}}>
                <div className="position-relative d-inline-block">
                  <img
                    src={imageFile}
                    alt="preview"
                    style={{ maxHeight: 150, borderRadius: 8 }}
                  />
                  <button
                    type="button"
                    className="btn btn-sm btn-danger position-absolute top-0 end-0 rounded-circle"
                    style={{
                      transform: "translate(50%, -50%)",
                      width: "24px",
                      height: "24px",
                      padding: 0,
                    }}
                    onClick={() => setImageFile(null)}
                  >
                    ×
                  </button>
                </div>
              </div>
            )}

            <div className="px-3 pb-3 mt-3 mt-auto align-self-center" style={{width: 'calc(100% - 120px)'}}>
              <div className="d-flex align-items-end gap-2 p-2 border rounded-3 bg-white shadow-sm" style={{ minWidth: "1000px", width: "100%" }}>
                <div className="flex-shrink-0">
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="upload-image"
                    onChange={handleImageChange}
                  />
                  <label
                    htmlFor="upload-image"
                    className="btn btn-link p-2 text-muted d-flex align-items-center justify-content-center"
                    style={{
                      cursor: "pointer",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                    }}
                  >
                    <FileImageOutlined />
                  </label>
                </div>

                <div className="flex-grow-1">
                  <Form.Item name="message" className="mb-0">
                    <Input.TextArea
                      className="border-0 shadow-none resize-none"
                      placeholder="Nhập tin nhắn..."
                      autoSize={{ minRows: 1, maxRows: 6 }}
                      style={{
                        fontSize: "14px",
                        lineHeight: "20px",
                        background: "transparent",
                        width: "100%",
                        maxWidth: "1200px",
                      }}
                      onPressEnter={(e) => {
                        if (!e.shiftKey) {
                          e.preventDefault();
                          form.submit();
                        }
                      }}
                    />
                  </Form.Item>
                </div>

                <div className="flex-shrink-0">
                  <Form.Item className="mb-0">
                    <Button
                      className="btn btn-primary p-0 d-flex align-items-center justify-content-center border-0"
                      htmlType="submit"
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #007bff, #0056b3)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-send-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                      </svg>
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </div>
          </Form>
        </div>
      ) : (
        <img
          src={emptyChat}
          alt="Empty chat"
          style={{ width: "100vw", objectFit: "fill" }}
        />
      )}
    </>
  );
};

export default HomePage;
