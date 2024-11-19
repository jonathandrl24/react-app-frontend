import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthService from "../services/AuthService";

// Esquema de validación usando Yup
const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup.string().email("Email inválido").required("El email es obligatorio"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
});

const RegisterForm = () => {
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
      const response = await AuthService.register(data);
      alert("Registro exitoso!");
      console.log("Usuario registrado:", response.data);

      // Opcional: Redirigir al usuario o mostrar un mensaje adicional
    } catch (error) {
      console.error("Error al registrarse:", error);
      alert("Error al registrarse. Por favor, intenta de nuevo.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre:</label>
        <input type="text" {...register("username")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
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
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm;
