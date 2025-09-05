const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const User = require("../models/user");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"]
    }
});

const userSocketMap = {};

io.on('connection', (socket) => {
  const userId = socket.handshake.query.userId
  console.log("User connected with ID:", userId);

  if (userId) {
    userSocketMap[userId] = socket.id
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap))

  socket.on('disconnect', () => {
    console.log('user disconnected');
    delete userSocketMap[userId]
    io.emit("getOnlineUsers", Object.keys(userSocketMap))
  });

  socket.on('chat message', (msg) => {
    const newMsg = {
      senderId: userId,
      receiverId: msg.receiverId,
      text: msg.text,
      createdAt: new Date().toISOString(),
    };

    console.log("New message:", newMsg);

    io.emit('chat message', newMsg);
  });

  socket.on('notification new', async (msg) => {
    const sender = await User.findById(userId).select("name profilePic");

    const newNoti = {
        senderId: {
          _id: sender._id,
          name: sender.name,
          profilePic: sender.profilePic,
        },
        receiverId: msg.receiverId,
        text: msg.text,
        type: "message",
        is_read: false,
        createdAt: new Date().toISOString(),
    };

    console.log("New notification:", newNoti);

    // Gửi cho receiver nếu đang online
    const receiverSocketId = userSocketMap[msg.receiverId];
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("notification new", newNoti);
    }
  });

});

module.exports = {io, app, server}