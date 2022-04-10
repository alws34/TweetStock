import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  Typography,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
  Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiUrlUsers } from "../Configs/apiUrlsKeys";
import { saveUserLocalStorage } from "../Configs/getLoggedUser";
import { navPaths } from "../Configs/navPaths";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "} TweetStock {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const MySwal = withReactContent(Swal);

const theme = createTheme();

export default function SignIn() {
  //const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [remember_me, setRememberMe] = useState(true);

  const { state } = useLocation();
  console.log("state", state);
  const user_email = state ? state.email : null;
  const pass = state ? state.pass : null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const u = {
      email: data.get("email"),
      password: data.get("password"),
    };

    getUser(u);
  };

  const getUser = (u) => {
    // Fetch the user from DB
    fetch(apiUrlUsers + `/?email=${u.email}&password=${u.password}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        console.log("res=", res);
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
    console.log("fetch user= ", fetched_user);
    //setUser(fetched_user);
    saveUserLocalStorage(fetched_user, remember_me);
    console.log("sign in", fetched_user);
    navigate(navPaths["home"]);
    return MySwal.fire({
      position: "center",
      icon: "success",
      title: `Successfuly logged In\nWelcome back ${fetched_user.FirstName}!`,
      showConfirmButton: false,
      timer: 800,
    });
  };

  const signInNotFound = () => {
    return MySwal.fire({
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
            <TextField
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
              defaultValue={pass}
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
            <Button
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
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
