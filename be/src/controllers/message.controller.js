const Message = require("../models/message");
const User = require("../models/user");
const cloudinary = require('../config/cloudinary');

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-passsword");
    res.status(200).json(filteredUsers)
  } catch (error) {
    console.error("err in getUsersForSidebar: ", error.message);
    res.status(500).json({message: "Internal server error"})
  }
};

const getMessage = async (req, res) => {
  try {
    const { id:userToChatId } = req.params
    const myId = req.user._id

    const messages = await Message.find({
        $or:[
            {senderId:myId, receiverId:userToChatId},
            {senderId:userToChatId, receiverId:myId}
        ]
    })
    res.status(200).json(messages)
  } catch (error) {
    console.error("err in getMessage: ", error.message);
    res.status(500).json({message: "Internal server error"})
  }
};

const sendMessage = async (req, res) => {
  try {
    const {text, image} = req.body;
    
    const { id:receiverId } = req.params
    const senderId = req.user._id

    let imageUrl;
    if (image) {
        const uploadResponse = await cloudinary.uploader.upload(image);
        imageUrl = uploadResponse;
    }

    const newMessage = new Message ({
        senderId,
        receiverId,
        text,
        image: imageUrl,
    });

    await newMessage.save();

    res.status(201).json(newMessage)
  } catch (error) {
    console.error("err in sendMessage: ", error.message);
    res.status(500).json({message: "Internal server error"})
  }
};



module.exports = { getUsersForSidebar, getMessage, sendMessage };
