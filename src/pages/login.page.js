import {useForm} from "react-hook-form";
import {authService} from "../services";
import {useNavigate} from "react-router-dom";
import TextField from "@mui/material/TextField";
import {Box, Grid} from "@mui/material";

const LoginPage = () => {

    const {handleSubmit, register} = useForm()
    const navigate = useNavigate()

    const submit = async (user) => {
    try {
       const {data} = await authService.login(user)
        authService.setTokens(data)
        console.log(data)
        navigate('/users')

    }catch (e) {
        console.log(e)
    }
    }

    return(
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(submit)}
        >

            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
        {/*<form onSubmit={handleSubmit(submit)}>*/}

            {/*<input type = 'text' placeholder={"email"} {...register("email")}/>*/}
            <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue=""
                inputProps={register("email")}
            />

            {/*<input type= 'text' placeholder={'password'} {...register("password")}/>*/}
            <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                inputProps={register("password")}
            />
            <button>login</button>
            </Grid>
            </Box>
            )
            }

            export {LoginPage}
