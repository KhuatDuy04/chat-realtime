require("dotenv").config();
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

    const payload = { id: user._id, email: user.email, name: user.name };
    const access_token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    return {
      EC: 0,
      EM: "Đăng nhập thành công",
      access_token,
      user: { id: user._id, email: user.email, name: user.name },
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

module.exports = {
  createUserService,
  loginService,
  getUserService,
};
