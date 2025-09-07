const Notification = require("../models/notification");

const getNotificationService = async (userId) => {
  return await Notification.find({
    receiverId: userId,
  })
    .sort({ createdAt: -1 })
    .populate("senderId", "name profilePic");
};

module.exports = { getNotificationService };
