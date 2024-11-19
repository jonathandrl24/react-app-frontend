import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import UserService from "../services/UserService";

const schema = yup.object().shape({
  username: yup.string().required("El nombre de usuario es obligatorio"),
  email: yup.string().email("Debe ser un email válido").required("El email es obligatorio"),
  password: yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required("La contraseña es obligatoria"),
});

const RegisterForm = () => {
  const {
    register, 
    handleSubmit, 
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await UserService.register(data);
      alert("Registro exitoso. Por favor, inicie sesión.");
    } catch (error) {
      alert("Hubo un error al registrar el usuario.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre de Usuario:</label>
        <input type="text" {...register("username")} />
        {errors.username && <p>{errors.username.message}</p>}
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
