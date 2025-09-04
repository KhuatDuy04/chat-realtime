const { default: cloudinary } = require("../config/cloudinary");
const { createUserService, loginService, getUserService } = require("../services/userService");

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
  return res.status(200).json(req.user)
}

const updateProfile = async (req, res) => {
    try {
        const {profilePic} = req.body;
        const userId = req.user._id;

        if (!profilePic) {
            return res.status(400).json({message: "Profile pic is required"})
        }

        const uploadResponse = await cloudinary.uploader.upload(profilePic)

        const updateUser = await User.findByIdAndUpdate(userId, {profilePic: uploadResponse.secure_url}, {new:true})
    
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
}

module.exports = {
    createUser, handleLogin, getUser, getAccount, updateProfile
}