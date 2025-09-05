const Notification = require("../models/notification")

const getNotification = async (req, res) => {
    try {
        const userId = req.user._id;

        const notifications = await Notification.find({
            receiverId: userId,
        })
        .sort({ createdAt: -1 })
        .populate("senderId", "name profilePic");

        return res.status(200).json(notifications);
    } catch (error) {
        return res.status(500).json({ message: "Lỗi lấy thông báo", error });
    }
}

module.exports = { getNotification }