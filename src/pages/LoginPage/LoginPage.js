import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


import isEmail from "validator/lib/isEmail";

import "./LoginPage.css";
import { authService } from "../../services";


const LoginPage = () => {
  const { handleSubmit, register } = useForm();
  const [isError, setIsError] = useState(false);
  const [authorizationError, setAuthorizationError] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const submit = async (user) => {
    try {
      const { data } = await authService.login(user);
      authService.setTokens(data);
      console.log(data);
      navigate("/users");
    } catch (error) {
      setAuthorizationError(error.response.data);
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const inputText = event.target.value;

    inputText.length > 0 ? setIsError(!isEmail(inputText)) : setIsError(false);

    setEmail(inputText);
  };

  return (
    <Grid flex={1} container alignItems="center" justifyContent="center">
      <Box
        noValidate
        component="form"
        autoComplete="off"
        display="flex"
        flexDirection="column"
        onSubmit={handleSubmit(submit)}
      >
        <TextField
          required
          id="outlined-required"
          label="Email"
          value={email}
          error={isError}
          helperText={isError ? "Wrong email" : false}
          onChange={handleChange}
          sx={{ m: 1, width: "25ch" }}
          inputProps={register("email")}
        />

        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          sx={{ m: 1, width: "25ch" }}
          autoComplete="current-password"
          inputProps={register("password")}
        />

        {authorizationError && (
          <Typography textAlign="center" variant="body1" color="red">
            {authorizationError}
          </Typography>
        )}
        <Button
          disabled={isError}
          size="large"
          sx={{ marginX: 1 }}
          type="submit"
          variant="contained"
        >
          Login
        </Button>
      </Box>
    </Grid>
  );
};

export default LoginPage;
