require("dotenv").config();
const cloudinary = require("../config/cloudinary");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const createUserService = async (name, email, password, gender, birthday) => {
  try {
    //check email
    const user = await User.findOne({ email });
    if (user) {
      console.log(`Chon 1 email khac: ${email}`);
      return null;
    }

    //hash user password
    const hashPassword = await bcrypt.hash(password, saltRounds);

    let result = await User.create({
      name: name,
      email: email,
      password: hashPassword,
      gender: gender,
      birthday: birthday,
      role: "user",
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const loginService = async (email, password) => {
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return { EC: 1, EM: "Email/password không hợp lệ" };
    }

    const isMatchPassword = await bcrypt.compare(password, user.password);
    if (!isMatchPassword) {
      return { EC: 2, EM: "Email/password không hợp lệ" };
    }

    const payload = {
      id: user._id,
      email: user.email,
      name: user.name,
      gender: user.gender,
      birthday: user.birthday,
      profilePic: user.profilePic,
    };
    const access_token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    return {
      EC: 0,
      EM: "Đăng nhập thành công",
      access_token,
      user: payload,
    };
  } catch (error) {
    console.log(error);
    return { EC: -1, EM: "Có lỗi xảy ra ở server" };
  }
};

const getUserService = async () => {
  try {
    let result = await User.find({}).select("-password");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const updateProfileService = async (data) => {
  try {
    const userId = data._id;
    const { _id, confirmPassword, oldPassword, newPassword, ...rest } = data;

    let updateData = { ...rest };

    if (oldPassword && newPassword && confirmPassword) {
      if (newPassword !== confirmPassword) {
        return res.status(400).json({ message: "Mật khẩu mới không khớp" });
      }

      const user = await User.findById(userId);
      if (!user) {
        return res
          .status(404)
          .json({ message: "Không tìm thấy user có id: ", userId });
      }

      const isMatchPassword = await bcrypt.compare(oldPassword, user.password);
      if (!isMatchPassword) {
        return res.status(400).json({ message: "Mật khẩu cũ không đúng" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      updateData.password = hashedPassword;
    }

    const updateUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    return { user: updateUser };
  } catch (error) {
    return { error: true, status: 500, message: error.message };
  }
};

const updateProfilePicService = async (profilePic, userId) => {
  try {
    if (!profilePic) {
      return res.status(400).json({ message: "Chưa tải ảnh lên" });
    }

    const uploadResponse = await cloudinary.uploader.upload(profilePic);

    const updateUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: uploadResponse.secure_url },
      { new: true }
    );
    return { user: updateUser };
  } catch (error) {
    return { error: true, status: 500, message: error.message };
  }
};

module.exports = {
  createUserService,
  loginService,
  getUserService,
  updateProfileService,
  updateProfilePicService,
};
