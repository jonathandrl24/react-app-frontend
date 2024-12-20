import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

const UserService = {
  register: async (userData) => {
    return await axios.post(`${API_URL}/register`, userData);
  },
};

export default UserService;
