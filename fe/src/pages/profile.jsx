import { Form, Input, Select, Button, DatePicker, notification } from "antd";
import dayjs from "dayjs";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../components/context/auth.context";
import { updatePic, updateProfile } from "../util/api";

const { Option } = Select;

const Profile = () => {
    const { auth, setAuth } = useContext(AuthContext)
    const [form] = Form.useForm();
    const fileInputRef = useRef(null);
    const [avatar, setAvatar] = useState(auth?.user?.profilePic || "../../src/assets/images/avatar/no-image.png");

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (e) => {
        try {
        const file = e.target.files[0];
        if (!file) return;

        const allowedTypes = ["image/jpeg", "image/png"];
        if (!allowedTypes.includes(file.type)) {
            notification.error({
                message: "Sai định dạng",
                description: "❌ Chỉ chấp nhận file JPG hoặc PNG.",
            });
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file)
        
        reader.onload = async () => {
            const base64Image = reader.result;
            
            const base64String = base64Image.split(",")[1];
            const base64Size = (base64String.length * 3) / 4;
            const maxSize = 2 * 1024 * 1024;
            if (base64Size  > maxSize) {
                notification.warning({
                    message: "File quá lớn",
                    description: "⚠️ Vui lòng chọn ảnh nhỏ hơn 2MB.",
                });
                return;
            }
            
            const res = await updatePic({profilePic: base64Image, userId: auth.user._id})
            if (res) {
                setAvatar(URL.createObjectURL(file));
                notification.success({ message: "Cập nhật ảnh thành công" });
                setAvatar(res.user.profilePic);
                setAuth((prev) => ({
                ...prev,
                user: {
                    ...prev.user,
                    profilePic: res.user.profilePic
                }
                }));
            }
        }
        } catch (err) {
            console.error("Upload failed", err);
        }
    };

    const onFinish = async (values) => {
        const res = await updateProfile(values);
        
        if (res) {
            notification.success({ message: "Cập nhật thành công" });

            setAuth((prev) => ({
            ...prev,
            user: res,
            }));
        }
    };

    useEffect(() => {
        if (auth?.user) {
        console.log(auth);
            
        form.setFieldsValue({
            _id: auth.user._id,
            name: auth.user.name,
            email: auth.user.email,
            gender: auth.user.gender,
            birthday: auth.user.birthday
            ? dayjs(auth.user.birthday)
            : null,
        });
        }
    }, [auth, form]);
    
    return (
        <div className="tyn-content  tyn-content-page">
            <div className="tyn-main tyn-content-inner" id="tynMain">
                <div className="container">
                <div className="tyn-profile">
                    <div className="tyn-profile-head">
                    <div className="tyn-profile-info pt-5">
                        <div className="tyn-media-group align-items-start pt-4">
                        <div className="tyn-media tyn-media-bordered tyn-size-4xl tyn-profile-avatar">
                            <img
                                src={avatar}
                                alt="avatar"
                                style={{ width: "100px", height: "100px", borderRadius: "50%", cursor: "pointer" }}
                                onClick={handleClick}
                            />
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="tyn-media-col">
                            <div className="tyn-media-row">
                            <h2 className="name">{ auth.user.name }</h2>
                            </div>{/* .tyn-media-row */}
                        </div>{/* .tyn-media-col */}
                        </div>{/* .tyn-media-group */}
                    </div>{/* .tyn-profile-info */}
                    </div>{/* .tyn-profile-head */}
                    <div className="tyn-profile-nav">
                    <ul className="nav nav-tabs nav-tabs-line">
                        <li className="nav-item">
                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-edit" type="button"> Chỉnh sửa hồ sơ </button>
                        </li>{/* li */}
                    </ul>{/* .nav-tabs */}
                    </div>{/* .tyn-profile-nav */}
                    <div className="tyn-profile-details">
                    <div className="tab-content">
                        <div className="tab-pane show active" id="profile-edit" tabIndex={0}>
                        <div className="row gy-5">
                            <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-lg-3">
                                <h6>Thông tin cá nhân</h6>
                                <div className="tyn-subtext">Chỉnh sửa thông tin cá nhân của bạn</div>
                                </div>{/* .col */}
                                <div className="col-lg-9">

                                    <Form
                                    form={form}
                                    layout="vertical"
                                    onFinish={onFinish}
                                    >
                                    <div className="row g-gs">
                                        {/* Id */}
                                        <Form.Item
                                            name="_id"
                                            style={{ display: 'none' }}
                                        >
                                            <Input type="hidden"/>
                                        </Form.Item>

                                        {/* Tên */}
                                        <div className="col-lg-6">
                                        <Form.Item
                                            label="Tên"
                                            name="name"
                                            rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
                                        >
                                            <Input placeholder="Tên của bạn" />
                                        </Form.Item>
                                        </div>

                                        {/* Số điện thoại */}
                                        <div className="col-lg-6">
                                        <Form.Item
                                        label="Số điện thoại"
                                        name="phone"
                                        >
                                        <Input type="number" placeholder="" />
                                        </Form.Item>
                                        </div>

                                        {/* Email */}
                                        <div className="col-12">
                                        <Form.Item label="Email" name="email">
                                            <Input disabled placeholder="Primary Email" />
                                        </Form.Item>
                                        <div className="tyn-subtext mt-2">
                                            Bạn cần phải có ít nhất một email được kết nối với tài khoản của bạn
                                        </div>
                                        </div>

                                        {/* Mật khẩu cũ */}
                                        <div className="col-lg-6">
                                        <Form.Item
                                            label="Mật khẩu cũ"
                                            name="oldPassword"
                                            rules={[
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                const newPass = getFieldValue("newPassword");
                                                const confirmPass = getFieldValue("confirmPassword");

                                                if (!value && (newPass || confirmPass)) {
                                                    return Promise.reject(new Error("Vui lòng nhập mật khẩu cũ!"));
                                                }
                                                return Promise.resolve();
                                                },
                                            }),
                                            ]}
                                        >
                                            <Input.Password placeholder="Old Password" />
                                        </Form.Item>
                                        </div>

                                        {/* Mật khẩu mới */}
                                        <div className="col-lg-6">
                                        <Form.Item
                                            label="Mật khẩu mới"
                                            name="newPassword"
                                            rules={[
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                const oldPass = getFieldValue("oldPassword");
                                                const confirmPass = getFieldValue("confirmPassword");

                                                if (!value && (oldPass || confirmPass)) {
                                                    return Promise.reject(new Error("Vui lòng nhập mật khẩu mới!"));
                                                }
                                                return Promise.resolve();
                                                },
                                            }),
                                            ]}
                                        >
                                            <Input.Password placeholder="New Password" />
                                        </Form.Item>
                                        </div>

                                        {/* Xác nhận mật khẩu mới */}
                                        <div className="col-lg-6">
                                        <Form.Item
                                            label="Xác nhận mật khẩu mới"
                                            name="confirmPassword"
                                            dependencies={["newPassword", "oldPassword"]}
                                            rules={[
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                const oldPass = getFieldValue("oldPassword");
                                                const newPass = getFieldValue("newPassword");

                                                if (!value && (oldPass || newPass)) {
                                                    return Promise.reject(new Error("Vui lòng nhập lại mật khẩu mới!"));
                                                }

                                                if (value && value !== newPass) {
                                                    return Promise.reject(new Error("Mật khẩu xác nhận không khớp!"));
                                                }

                                                return Promise.resolve();
                                                },
                                            }),
                                            ]}
                                        >
                                            <Input.Password placeholder="Confirm New Password" />
                                        </Form.Item>
                                        </div>

                                        {/* Ngày sinh */}
                                        <div className="col-lg-6">
                                        <Form.Item
                                        label="Ngày sinh"
                                        name="birthday"
                                        rules={[{ required: true, message: "Vui lòng chọn ngày sinh!" }]}
                                        >
                                        <DatePicker
                                            format="DD-MM-YYYY"
                                            style={{ width: "100%" }}
                                            placeholder="Chọn ngày sinh"
                                            disabledDate={(current) => current && current > dayjs().endOf("day")} // không cho chọn ngày tương lai
                                        />
                                        </Form.Item>
                                        </div>

                                        {/* Giới tính */}
                                        <div className="col-lg-6">
                                        <Form.Item
                                        label="Giới tính"
                                        name="gender"
                                        rules={[{ required: true, message: "Vui lòng chọn giới tính!" }]}
                                        >
                                            <Select placeholder="Chọn giới tính">
                                            <Option value="male">Nam</Option>
                                            <Option value="female">Nữ</Option>
                                            <Option value="other">Khác</Option>
                                            </Select>
                                        </Form.Item>
                                        </div>

                                        {/* Submit */}
                                        <div className="col-lg-12 d-flex justify-content-center">
                                        <Button type="primary" htmlType="submit">
                                            Cập nhật
                                        </Button>
                                        </div>
                                    </div>
                                    </Form>

                                </div>{/* .col */}
                            </div>{/* .row */}
                            </div>{/* .col */}
                        </div>{/* .row */}
                        </div>{/* .tab-pane */}
                    </div>{/* .tab-content */}
                    </div>{/* .tyn-profile-details */}
                </div>{/* .tyn-profile */}
                </div>{/* .container */}
            </div>{/* .tyn-main */}
        </div>
    );
}

export default Profile;