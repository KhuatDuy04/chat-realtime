import axios from "./axios.custiomize";

const createUserApi = (name, email, password, gender, birthday) => {
    const URL_API = "/v1/api/register"
    const data = {
        name, email, password, gender, birthday
    }
    return axios.post(URL_API, data)
}

const loginApi = (email, password) => {
    const URL_API = "/v1/api/login"
    const data = {
        name, email, password
    }
    return axios.post(URL_API, data)
}

const getUserApi = () => {
    const URL_API = "/v1/api/user"
    return axios.get(URL_API)
}

const getUsersForSidebar = () => {
    const URL_API = "/v1/api/message/users"
    return axios.get(URL_API)
}

const getMessage = (id) => {
    const URL_API = "/v1/api/message/" + id;
    return axios.get(URL_API)
}

const sendMessage = (text, receiverId) => {
    const URL_API = "/v1/api/message/send/" + receiverId;
    const data = {
        text,
    }
    return axios.post(URL_API, data)
}

export {
    createUserApi, loginApi, getUserApi, getUsersForSidebar, getMessage, sendMessage
}