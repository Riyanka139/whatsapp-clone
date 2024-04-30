import axios from "axios";

const API_BASE_URL = "http://localhost:4000";

// unused
const createUser = async (userData) => {
    return await axios.post(`${API_BASE_URL}/user`, userData);
};

const login = async (data) => {
    return await axios.post(`${API_BASE_URL}/login`, data);
}

const searchUser = async (phone) => {
    return await axios.get(`${API_BASE_URL}/user?phoneNumber=${phone}`);
};

// unused
const createChannel = async (data) => {
    return await axios.post(`${API_BASE_URL}/channel`, data);
};
  
const getChannelList = async (phone) => {
    return await axios.get(`${API_BASE_URL}/channel?phone=${phone}`);
};
  
const sendMessage = async (data) => {
    return await axios.post(`${API_BASE_URL}/message`, data);
};

export const apiService = {
    createUser,
    login,
    searchUser,
    createChannel,
    getChannelList,
    sendMessage,
};

export default apiService;