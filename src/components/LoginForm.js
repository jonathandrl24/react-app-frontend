import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthService from "../services/AuthService";

// Esquema de validación usando Yup
const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("El email es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
});

const LoginForm = () => {
  // Configuración del formulario usando react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Manejo del envío del formulario
  const onSubmit = async (data) => {
    try {
      const response = await AuthService.login(data);
      alert("Inicio de sesión exitoso!");
      console.log("Datos del usuario:", response.data);

      // Opcional: Redirigir al usuario o guardar un token en localStorage
      localStorage.setItem("token", response.data.token); // Ejemplo
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;
