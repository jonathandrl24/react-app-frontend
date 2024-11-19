import axios from "axios";

// Cargar la URL base desde las variables de entorno
const API_URL = process.env.REACT_APP_API_URL;

const AuthService = {
  // Endpoint para el inicio de sesión
  login: async (credentials) => {
    return await axios.post(`${API_URL}/auth/login`, credentials);
  },
  
  // Endpoint para el registro de usuario
  register: async (data) => {
    return await axios.post(`${API_URL}/auth/register`, data);
  },

  // Endpoint para cerrar sesión 
  logout: async () => {
    return await axios.post(`${API_URL}/auth/logout`);
  },
};

export default AuthService;
