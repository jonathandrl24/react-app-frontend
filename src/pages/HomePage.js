import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Bienvenido a Paymaster</h1>
      <p>Gestiona tus pagos y servicios de construcción de forma sencilla.</p>
      <Link to="/login">Iniciar Sesión</Link> | <Link to="/register">Registrarse</Link>
    </div>
  );
};

export default HomePage;
