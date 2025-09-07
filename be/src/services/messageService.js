const Message = require("../models/message");
const User = require("../models/user");
const cloudinary = require('../config/cloudinary');
const Notification = require("../models/notification");

const getUsersForSidebarService = async (loggedInUserId) => {
  return await User.find({
    _id: { $ne: loggedInUserId },
  }).select("-password");
};

const getMessageService = async (myId, userToChatId) => {
  return await Message.find({
    $or: [
      { senderId: myId, receiverId: userToChatId },
      { senderId: userToChatId, receiverId: myId },
    ],
  });
};

const sendMessageService = async (senderId, receiverId, text, image) => {
  let imageUrl;
  if (image) {
    const uploadResponse = await cloudinary.uploader.upload(image);
    imageUrl = uploadResponse.secure_url;
  }

  const newMessage = await Message.create({
    senderId,
    receiverId,
    text,
    image: imageUrl,
  });

  await Notification.create({
    senderId,
    receiverId,
    text,
    type: "message",
    is_read: false,
  });

  return newMessage;
};

module.exports = {
  getUsersForSidebarService,
  getMessageService,
  sendMessageService,
};