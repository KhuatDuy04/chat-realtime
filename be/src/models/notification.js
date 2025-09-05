const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true,
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true,
    },
    text: {
        type: String,
    },
    type: {
        type: String,
    },
    is_read: {
        type: Boolean,
    }
  },
  { timestamps: true }
);

const Notification = mongoose.model("notification", notificationSchema);

module.exports = Notification;
