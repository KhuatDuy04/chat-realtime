const {
  getUsersForSidebarService,
  getMessageService,
  sendMessageService,
} = require("../services/messageService");

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const users = await getUsersForSidebarService(loggedInUserId);
    res.status(200).json(users);
  } catch (error) {
    console.error("err in getUsersForSidebar: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;

    const messages = await getMessageService(myId, userToChatId);
    res.status(200).json(messages);
  } catch (error) {
    console.error("err in getMessage: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const newMessage = await sendMessageService(senderId, receiverId, text, image);
    res.status(201).json(newMessage);
  } catch (error) {
    console.error("err in sendMessage: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getUsersForSidebar, getMessage, sendMessage };