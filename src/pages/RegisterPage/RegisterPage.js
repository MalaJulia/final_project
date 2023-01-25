import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authService } from "../../services/index";

const RegisterPage = () => {
  const { handleSubmit, register } = useForm();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submit = async (user) => {
    try {
      await authService.register(user);
      navigate("/login");
    } catch (e) {
      setError(e.response.data?.email);
    }
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      {error && <h3>{error}</h3>}
      <input type="text" placeholder={"username"} {...register("username")} />
      <input type="text" placeholder={"password"} {...register("password")} />
      <button>Register</button>
    </form>
  );
};
export default RegisterPage;
