import * as React from "react";
import { useState } from "react";
import Copyright from "../../Shared/UserDetails/Copyright";
import FormField from "../../Shared/Forms/FormField";
import { apiUrlUsers } from "../../Configs/apiUrlsKeys";
import { saveUserLocalStorage } from "../../Configs/getLoggedUser";
import { navPaths } from "../../Configs/navPaths";
import {
  Avatar,
  CssBaseline,
  Typography,
  Container,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import FormPageButtons from "../../Shared/Forms/FormPageButtons";

const MySwal = withReactContent(Swal);

const theme = createTheme();

export default function SignIn() {
  //const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [remember_me, setRememberMe] = useState(true);

  const { state } = useLocation();
  const default_user_email = state ? state.email : null;
  const default_user_pass = state ? state.pass : null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    fetchUser(data.get("email"), data.get("password"));
  };

  const fetchUser = (user_email, user_pass) => {
    // Fetch the user from DB
    fetch(apiUrlUsers + `/?email=${user_email}&password=${user_pass}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else return false;
      })
      .then(
        (result) => {
          if (result) {
            signInSuccess(result);
          } else {
            signInNotFound();
          }
        },
        (error) => {
          console.log("err =", error);
        }
      );
  };

  const signInSuccess = (fetched_user) => {
    saveUserLocalStorage(fetched_user, remember_me);
    navigate(navPaths["home"]);
    return MySwal.fire({
      background:
        global.config.theme === "dark"
          ? global.config.darkBG
          : global.config.lightBG,
      color: global.config.theme === "dark" ? "white" : "black",
      position: "center",
      icon: "success",
      title: `Successfuly logged In\nWelcome back ${fetched_user.FirstName}!`,
      showConfirmButton: false,
      timer: 800,
    });
  };

  const signInNotFound = () => {
    return MySwal.fire({
      background:
        global.config.theme === "dark"
          ? global.config.darkBG
          : global.config.lightBG,
      color: global.config.theme === "dark" ? "white" : "black",
      icon: "error",
      title: "Oops...",
      text: "Wrong Username or Password!",
      footer: "Please try again...",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <FormField
              xs={12}
              label="Email Address"
              autoComplete="email"
              fieldName="email"
              inputProps={{
                pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
              }}
              sx={{
                required: true,
                margin: "normal",
                defaultValue: default_user_email,
                autoFocus: true,
              }}
            />

            <FormField
              xs={12}
              label="Password"
              autoComplete="new-password"
              fieldName="password"
              inputProps={{
                minlength: 6,
              }}
              sx={{
                type: "password",
                required: true,
                margin: "normal",
                defaultValue: default_user_pass,
              }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={remember_me}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  value="remember"
                  color="primary"
                />
              }
              label="Remember me"
            />
            <FormPageButtons
              primaryButtonText={"Sign In"}
              linkText={"Don't have an account? Sign Up"}
              navPathKey={"sign up"}
            />
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

/* <Button
  type="submit"
  fullWidth
  variant="contained"
  sx={{ mt: 3, mb: 2 }}
>
  Sign In
</Button>
<Grid container>
  <Grid item>
    <Button
      onClick={() => navigate(navPaths["sign up"])}
      variant="body2"
    >
      <Link>Don't have an account? Sign Up</Link>
    </Button>
  </Grid>
</Grid> */

/* <TextField
  margin="normal"
  required
  fullWidth
  id="email"
  label="Email Address"
  name="email"
  autoComplete="email"
  autoFocus
  defaultValue={user_email}
/>
<TextField
  margin="normal"
  required
  fullWidth
  name="password"
  label="Password"
  type="password"
  id="password"
  autoComplete="current-password"
  defaultValue={user_pass}
/> */
