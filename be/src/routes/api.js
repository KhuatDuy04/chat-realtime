const express = require("express");
const auth = require('../middleware/auth');
const { createUser, handleLogin, getUser, getAccount, updateProfile } = require("../controllers/user.controller");
const { getUsersForSidebar, getMessage, sendMessage } = require("../controllers/message.controller");

const routerAPI = express.Router();

routerAPI.use(auth);

routerAPI.post('/register', createUser)
routerAPI.post('/login', handleLogin)
routerAPI.get('/user', getUser)
routerAPI.get('/account', getAccount)
routerAPI.put('/update-profile', updateProfile)

routerAPI.get('/message/users', getUsersForSidebar)
routerAPI.get('/message/:id', getMessage)
routerAPI.post("/message/send/:id", sendMessage)

module.exports = routerAPI;