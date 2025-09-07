import React, { useContext } from "react";
import { Button, Form, Input, notification } from "antd";
import { loginApi } from "../util/api";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/auth.context";
import "../styles/login.css"
import { useSocket } from "../components/context/socket.context";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const { connectSocket } = useSocket();

  const onFinish = async (values) => {
    const { email, password } = values;
    const res = await loginApi(email, password);

    if (res && res.EC === 0) {
      localStorage.setItem("access_token", res.access_token);
      notification.success({
        message: "Đăng nhập",
        description: "Thành công",
      });
      setAuth({
        isAuthenticated: true,
        user: { ...res.user },
      });
      connectSocket(res.user._id);
      navigate("/");
    } else {
      notification.error({
        message: "Đã có lỗi xảy ra",
        description: res?.EM ?? "error",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Left side */}
        <div className="login-left">
          <h1 className="login-logo">Message</h1>
          <p className="login-text">
            Message giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
            của bạn.
          </p>
        </div>

        {/* Right side */}
        <div className="login-right">
          <Form layout="vertical" onFinish={onFinish} autoComplete="off" style={{ width: "100%" }}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email!" },
                { type: "email", message: "Email không hợp lệ!" },
              ]}
            >
              <Input placeholder="Email" size="large" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu!" },
                { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
                {
                  pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/,
                  message: "Mật khẩu cần có chữ hoa, chữ thường và số!"
                }
              ]}
            >
              <Input.Password placeholder="Mật khẩu" size="large" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                className="btn-login"
              >
                Đăng nhập
              </Button>
            </Form.Item>

            {/* <div className="login-forgot">
              <a href="#">Quên mật khẩu?</a>
            </div> */}

            <hr />

            <div className="login-register">
              <Button className="btn-register" size="large">
                <Link to={"/register"}>
                  Tạo tài khoản mới
                </Link>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;