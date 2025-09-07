const { createUserService, loginService, getUserService, updateProfileService, updateProfilePicService, getAccountService } = require("../services/userService");

const createUser = async (req, res) => {
    const {name, email, password, gender, birthday} = req.body;
    const data = await createUserService(name, email, password, gender, birthday);
    return res.status(200).json(data)
}

const handleLogin = async (req, res) => {
    const {email, password} = req.body;
    const data = await loginService(email, password)
    return res.status(200).json(data)
}

const getUser = async (req, res) => {
    const data = await getUserService();
    return res.status(200).json(data)
}

const getAccount = async (req, res) => {
    console.log("id user",req.user._id);
    
    const user = await getAccountService(req.user._id)
    return res.status(200).json(user)
}

const updateProfile = async (req, res) => {
    const data = req.body;
    const result = await updateProfileService(data);

    if (result.error) {
        return res.status(result.status).json({ message: result.message });
    }

    return res.status(200).json(result.user);
}

const updateProfilePic = async (req, res) => {
    const {profilePic, userId} = req.body;
    const user = await updateProfilePicService(profilePic, userId);
    if (user.error) {
        return res.status(user.status).json({ message: user.message });
    }
    res.status(200).json(user)
}

module.exports = {
    createUser, handleLogin, getUser, getAccount, updateProfile, updateProfilePic
}