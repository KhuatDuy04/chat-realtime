import React from "react";
import { Button, Form, Input, Select, Radio, notification } from "antd";
import { createUserApi } from "../util/api";
import { useNavigate } from "react-router-dom";
import "../styles/register.css"

const { Option } = Select;

const RegisterPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { firstName, lastName, email, password, gender,day, month, year } = values;
    const birthday = new Date(year, month - 1, day);
    const res = await createUserApi(firstName + " " + lastName, email, password, gender, birthday);

    if (res) {
      notification.success({
        message: "CREATE USER",
        description: "Success",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "ERROR CREATE USER",
        description: "error",
      });
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-logo">Message</h1>
      <div className="register-box">
        <h2 className="register-title">Tạo tài khoản mới</h2>
        <p className="register-subtitle">Nhanh chóng và dễ dàng.</p>
        <Form layout="vertical" onFinish={onFinish} autoComplete="off">
          {/* Họ và Tên */}
          <div className="register-row">
            <Form.Item
              name="lastName"
              rules={[
                { required: true, message: "Vui lòng nhập họ!" },
                { min: 2, message: "Họ phải có ít nhất 2 ký tự!" }
              ]}
              style={{ flex: 1, marginRight: "10px" }}
            >
              <Input placeholder="Họ" className="register-input" autoFocus/>
            </Form.Item>
            <Form.Item
              name="firstName"
               rules={[
                { required: true, message: "Vui lòng nhập tên!" },
                { min: 2, message: "Tên phải có ít nhất 2 ký tự!" }
              ]}
              style={{ flex: 1 }}
            >
              <Input placeholder="Tên" className="register-input" />
            </Form.Item>
          </div>

          {/* Ngày sinh */}
          <label className="register-label">Ngày sinh</label>
          <div className="register-row">
            <Form.Item
              name="day"
              rules={[{ required: true, message: "Chọn ngày!" }]}
              style={{ flex: 1, marginRight: "5px" }}
            >
              <Select placeholder="Ngày">
                {[...Array(31)].map((_, i) => (
                  <Option key={i + 1} value={i + 1}>
                    {i + 1}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="month"
              rules={[{ required: true, message: "Chọn tháng!" }]}
              style={{ flex: 1, marginRight: "5px" }}
            >
              <Select placeholder="Tháng">
                {Array.from({ length: 12 }, (_, i) => (
                  <Option key={i + 1} value={i + 1}>
                    Tháng {i + 1}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="year"
              rules={[
                { required: true, message: "Chọn năm!" },
                () => ({
                  validator(_, value) {
                    if (!value) return Promise.reject();
                    const currentYear = new Date().getFullYear();
                    if (value > currentYear) {
                      return Promise.reject(new Error("Năm sinh không hợp lệ!"));
                    }
                    if (currentYear - value < 13) {
                      return Promise.reject(new Error("Bạn phải đủ 13 tuổi trở lên!"));
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
              style={{ flex: 1 }}
            >
              <Select placeholder="Năm">
                {Array.from({ length: 100 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <Option key={year} value={year}>
                      {year}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </div>

          {/* Giới tính */}
          <label className="register-label">Giới tính</label>
          <Form.Item
            name="gender"
            initialValue="male"
            rules={[{ required: true, message: "Chọn giới tính!" }]}
          >
            <Radio.Group className="register-gender">
              <Radio value="male" className="gender-option">Nam</Radio>
              <Radio value="female" className="gender-option">Nữ</Radio>
              <Radio value="custom" className="gender-option">Tùy chỉnh</Radio>
            </Radio.Group>
          </Form.Item>

          {/* Email */}
          <Form.Item
            name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email!" },
                { type: "email", message: "Email không hợp lệ!" }
              ]}
          >
            <Input placeholder="Email" className="register-input" />
          </Form.Item>

          {/* Password */}
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
            hasFeedback
          >
            <Input placeholder="Mật khẩu mới" className="register-input" />
          </Form.Item>

          <p className="register-note">
            Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn
            lên Facebook. <a href="#">Tìm hiểu thêm.</a>
          </p>
          <p className="register-note">
            Bằng cách nhấp vào Đăng ký, bạn đồng ý với{" "}
            <a href="#">Điều khoản</a>, <a href="#">Chính sách quyền riêng tư</a> và{" "}
            <a href="#">Chính sách cookie</a> của chúng tôi.
          </p>

          {/* Submit */}
          <Form.Item>
            <Button type="default" htmlType="submit" className="btn-register" block>
              Đăng ký
            </Button>
          </Form.Item>

          <div className="register-login-link">
            <a href="/login">Bạn đã có tài khoản ư?</a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;