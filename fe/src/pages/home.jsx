import { useEffect, useRef, useState } from 'react';
import SideBar from './../components/layout/SideBar';
import { Button, Form, Input, notification } from 'antd';
import { sendMessage } from '../util/api';
import { useOutletContext } from 'react-router-dom';
import emptyChat from "../assets/images/emty-chat.png";
import { useSocket } from '../components/context/socket.context';
import { useContext } from 'react';
import { AuthContext } from '../components/context/auth.context';

const HomePage = () => {
    const { auth } = useContext(AuthContext)
    const { onlineUsers } = useOutletContext();
    const [message, setMessage] = useState([]);
    const [receiver, setReceiver] = useState([]);
    const [form] = Form.useForm();
    const { socket } = useSocket();
    const messageEndRef = useRef(null)
    
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

    const onFinish = async (values) => {
        const { message: text } = values;
        if (!text || text.trim() === '') return;

        try {
            const res = await sendMessage(text, receiver._id);

            const newMsg = {
                senderId: auth.user._id,
                receiverId: receiver._id,
                text,
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
            messageEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [message])

    return (
        <>
            <SideBar setMessage={setMessage}  setReceiver={setReceiver} onlineUsers={onlineUsers}/>
            {/* {console.log("data ben home page:", message)}
            {console.log("nguoi nhan tin nhan ben home page:", sender)} */}
            {receiver.length !== 0 ? (
                <div className="tyn-main tyn-chat-content" id="tynMain">
                    <div className="tyn-chat-head">
                        <ul className="tyn-list-inline d-md-none ms-n1">
                        <li><button className="btn btn-icon btn-md btn-pill btn-transparent js-toggle-main">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                            </svg>{/* arrow-left */}
                            </button></li>
                        </ul>
                        <div className="tyn-media-group">
                        <div className="tyn-media tyn-size-lg d-none d-sm-inline-flex">
                            <img src={receiver?.profilePic != "" ? receiver?.profilePic : "../../src/assets/images/avatar/no-image.png"} alt="" />
                        </div>{/* .tyn-media */}
                        <div className="tyn-media tyn-size-rg d-sm-none">
                            <img src={receiver?.profilePic != "" ? receiver?.profilePic : "../../src/assets/images/avatar/no-image.png"} alt="" />
                        </div>{/* .tyn-media */}
                        <div className="tyn-media-col">
                            <div className="tyn-media-row">
                            <h6 className="name">{receiver?.name}</h6>
                            </div>
                            <div className="tyn-media-row has-dot-sap">
                            <span className="meta">Active</span>
                            </div>
                        </div>{/* .tyn-media-col */}
                        </div>{/* .tyn-media-group */}
                        <ul className="tyn-list-inline gap gap-3 ms-auto">
                        <li className="d-none d-sm-block">
                            <button className="btn btn-icon btn-light js-toggle-chat-search">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>{/* search */}
                            </button>
                        </li>
                        </ul>{/* .tyn-list-inline */}
                        <div className="tyn-chat-search" id="tynChatSearch">
                        <div className="flex-grow-1">
                            <div className="form-group">
                            <div className="form-control-wrap form-control-plaintext-wrap">
                                <div className="form-control-icon start">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>{/* search */}
                                </div>
                                <input type="text" className="form-control form-control-plaintext" id="searchInThisChat" placeholder="Search in this chat" />
                            </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap gap-3">
                            <ul className="tyn-list-inline ">
                            <li><button className="btn btn-icon btn-sm btn-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                                </svg>{/* chevron-up */}
                                </button></li>
                            <li><button className="btn btn-icon btn-sm btn-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg>{/* chevron-down */}
                                </button></li>
                            </ul>
                            <ul className="tyn-list-inline ">
                            <li><button className="btn btn-icon btn-md btn-light js-toggle-chat-search">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                </svg>{/* x-lg */}
                                </button></li>
                            </ul>
                        </div>
                        </div>{/* .tyn-chat-search */}
                    </div>{/* .tyn-chat-head */}
                    <div className="tyn-chat-body js-scroll-to-end" id="tynChatBody">
                        <div className="tyn-reply" id="tynReply">


                        {groupedMessages.map((group, groupIndex) => {
                        const isMe = group.senderId !== auth.user._id;
                        const isLast = groupIndex === 0;

                        return (
                            <div
                            key={groupIndex}
                            className={`tyn-reply-item ${isMe ? "incoming" : "outgoing"}`}
                            ref={isLast ? messageEndRef : null}
                            >
                            {/* avatar chỉ hiện với đối phương */}
                            {isMe && (
                                <div className="tyn-reply-avatar">
                                <div className="tyn-media tyn-size-md tyn-circle">
                                    <img src={receiver?.profilePic != "" ? receiver?.profilePic : "../../src/assets/images/avatar/no-image.png"} alt="" />
                                </div>
                                </div>
                            )}

                            <div className="tyn-reply-group">
                                {group.messages.reverse().map((msg, index) => (
                                <div key={index} className="tyn-reply-bubble">
                                    <div className="tyn-reply-text">{msg.text}</div>
                                        <span className='ps-2 pe-2'>
                                        {new Date(msg.createdAt).toLocaleTimeString("vi-VN", {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                        </span>
                                    <ul className="tyn-reply-tools">
                                    <li>
                                        <button className="btn btn-icon btn-sm btn-transparent btn-pill">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-emoji-smile-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
                                        </svg>
                                        </button>
                                    </li>
                                    <li className="dropup-center">
                                        <button
                                        className="btn btn-icon btn-sm btn-transparent btn-pill"
                                        data-bs-toggle="dropdown"
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-three-dots"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                        </svg>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-xxs">
                                        <ul className="tyn-list-links">
                                            <li>
                                            <a href="#">
                                                <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-pencil-square"
                                                viewBox="0 0 16 16"
                                                >
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                                />
                                                </svg>
                                                <span>Edit</span>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="#">
                                                <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-trash"
                                                viewBox="0 0 16 16"
                                                >
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                </svg>
                                                <span>Delete</span>
                                            </a>
                                            </li>
                                        </ul>
                                        </div>
                                    </li>
                                    </ul>
                                </div>
                                ))}
                            </div>
                            </div>
                        );
                        })}


                        </div>{/* .tyn-reply */}
                    </div>{/* .tyn-chat-body */}


                    <Form layout="vertical" className="tyn-chat-form" onFinish={onFinish} autoComplete="off" form={form}>
                        <div className="tyn-chat-form-insert">
                            <ul className="tyn-list-inline gap gap-3 mb-2">
                                <li className="dropup">
                                <button className="btn btn-icon btn-light btn-md btn-pill" data-bs-toggle="dropdown" data-bs-offset="0,10" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                    </svg>{/* plus-lg */}
                                </button>
                                <div className="dropdown-menu">
                                    <ul className="tyn-list-links align-content-center">
                                    <li><a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person-video2" viewBox="0 0 16 16">
                                            <path d="M10 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                            <path d="M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM1 3a1 1 0 0 1 1-1h2v2H1zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3zm-4-2h3v2H2a1 1 0 0 1-1-1zm3-1H1V8h3zm0-3H1V5h3z" />
                                        </svg>{/* person-video2 */}
                                        <span>New Group</span></a></li>
                                    <li>
                                        <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16">
                                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                                            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                                        </svg>{/* mic */}
                                        <span>Voice Clip</span>
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                                </li>{/* li */}
                                <li className="d-none d-sm-block">
                                    <button className="btn btn-icon btn-light btn-md btn-pill" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>{/* .tyn-chat-form-insert */}
                        <div className="tyn-chat-form-insert d-flex">

                        <Form.Item
                            name="message"
                            className='mb-0'
                            >
                            <Input className="tyn-chat-form-input border me-4" style={{ width: '100%', maxWidth: '1100px', minWidth: '500px' }} />
                        </Form.Item>

                        <ul className="tyn-list-inline me-n2 my-1 ms-3">
                            <li><button className="btn btn-icon btn-white btn-md btn-pill">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
                                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                                </svg>{/* mic-fill */}
                            </button></li>
                            <li>
                            <Form.Item className='mb-0'>
                                <Button className="btn btn-icon btn-white btn-md btn-pill" htmlType="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                                </svg>
                                </Button>
                            </Form.Item>
                            </li>
                        </ul>
                        </div>
                    </Form>
                </div>
            ) : (
                <img src={emptyChat} alt="Empty chat" style={{width: '100vw', objectFit: 'fill'}}/>
            )}
            
        </>
    )
}

export default HomePage