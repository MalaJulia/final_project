import {useForm} from "react-hook-form";
import {authService} from "../services";

const LoginPage = () => {
    const {handleSubmit, register} = useForm()

    const submit = async (user) => {
    try {
       const {data} = await authService.login( user)
        console.log(data)

    }catch (e) {
        console.log(e)
    }
    }

    return(
        <form onSubmit={handleSubmit(submit)}>

            <input type = 'text' placeholder={"email"} {...register("email")}/>
            <input type= 'text' placeholder={'password'} {...register("password")}/>
            <button>login</button>
            </form>
            )
            }

            export {LoginPage}
