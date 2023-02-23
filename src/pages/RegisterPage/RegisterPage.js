import { useForm } from "react-hook-form";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import {authService, searchService} from "../../services/index";
import {adminUserService} from "../../services/adminUser.service";
import UserAdmin from "./userAdmin/userAdmin";

const RegisterPage = () => {

  const { handleSubmit, register } = useForm();
  const [usersAdmin, setUserAdmin] = useState([])
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    adminUserService.getAll()
        .then(({ data }) => {
          setUserAdmin(data)
          console.log(data, "data")
        })
        .catch((error) => {
          console.log(error, "Error in request");
        });
  }, []);


  // const submit = async (user) => {
  //   try {
  //     await authService.register(user);
  //     navigate("/login");
  //   } catch (e) {
  //     setError(e.response.data?.email);
  //   }
  // };
  return (
      usersAdmin.map((userAdmin) => (<UserAdmin key={userAdmin._id} userAdmin={userAdmin}/>)))
  //   <form onSubmit={handleSubmit(submit)}>
  //     {error && <h3>{error}</h3>}
  //     <input type="text" placeholder={"username"} {...register("username")} />
  //     <input type="text" placeholder={"password"} {...register("password")} />
  //     <button>Register</button>
  //   </form>
  // );
};
export default RegisterPage;
