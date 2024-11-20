
const API_URL = "http://localhost:5000/api";

/**
 * Función para realizar login.
 * @param {string} email - Correo electrónico del usuario.
 * @param {string} password - Contraseña del usuario.
 * @returns {Promise} - Respuesta del backend.
 */
export const loginUser = async (email, password) => {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.statusText);
    }
  
    return response.json();
  };
  
  

  export const fetchWithAuth = async (endpoint, options = {}) => {
    const token = localStorage.getItem("token");
  
    const res = await fetch(`${API_URL}/${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Asegúrate de enviar el token si la ruta lo requiere
        ...options.headers,
      },
    });
  
    if (!res.ok) {
      throw new Error(`Error en la solicitud: ${res.statusText}`);
    }
  
    return res.json();
  };