const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

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
});

module.exports = {io, app, server}