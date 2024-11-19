import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import AuthService from "../services/AuthService";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const response = await AuthService.login(data);
      login(response.data);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      alert("Error al iniciar sesión");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("username")} placeholder="Usuario" required />
      <input type="password" {...register("password")} placeholder="Contraseña" required />
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default LoginForm;
