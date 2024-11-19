import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

const AuthService = {
  login: async (credentials) => {
    return await axios.post(`${API_URL}/login`, credentials);
  },
  logout: async () => {
    return await axios.post(`${API_URL}/logout`);
  },
};

export default AuthService;
