const { getNotificationService } = require("../services/notificationService");

const getNotification = async (req, res) => {
  try {
    const userId = req.user._id;
    const notifications = await getNotificationService(userId);
    return res.status(200).json(notifications);
  } catch (error) {
    console.error("err in getNotification:", error.message);
    return res.status(500).json({ message: "Lỗi lấy thông báo", error });
  }
};

module.exports = { getNotification };
