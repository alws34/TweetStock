import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { apiUrlUsers } from "../Configs/apiUrlsKeys";
import { getRememberMe, saveUserLocalStorage } from "../Configs/getLoggedUser";
import { navPaths } from "../Configs/navPaths";
import CountrySelect from "../CountrySelect";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Camera from "../Camera";

const MySwal = withReactContent(Swal);

const default_profile_img =
  "https://www.pngkit.com/png/full/126-1262807_instagram-default-profile-picture-png.png";
const theme = createTheme();

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

export default function SignUp() {
  const navigate = useNavigate();
  let user = {};
  const [img, setImg] = useState(null);
  const [country, setCountry] = useState(null);

  const getCountry = (countryProp) => {
    setCountry(countryProp);
    console.log(country);
  };

  const postUser = (user) => {
    fetch(apiUrlUsers, {
      method: "POST",
      body: JSON.stringify(user),
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8", //very important to add the 'charset=UTF-8'!!!!
        Accept: "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        console.log("res=", res);
        return res.json();
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          if (result === -1) {
            MySwal.fire({
              icon: "error",
              title: "Oops...",
              text: "Email adress already taken",
              footer: "please try another one",
            });
          } else {
            signUpSuccess();
            MySwal.fire({
              position: "center",
              icon: "success",
              title: "Succesfuly signed up",
              showConfirmButton: false,
              timer: 800,
            });
          }
        },
        (error) => {
          console.log("err post user=", error);
        }
      );
  };

  const signUpSuccess = () => {
    navigate(navPaths["sign in"], {
      state: { email: user.Email, pass: user.Password },
    });
  };

  //Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    user = {
      FirstName: data.get("firstName"),
      LastName: data.get("lastName"),
      Email: data.get("email"),
      Password: data.get("password"),
      Address: country,
      Picture: img ? img : default_profile_img,
    };

    console.log("handle submit", user);

    postUser(user);
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
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  inputProps={{
                    minlength: 2,
                    maxlength: 15,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  inputProps={{
                    minlength: 2,
                    maxlength: 15,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputProps={{
                    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputProps={{
                    minlength: 6,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CountrySelect id="country" sendToForm={getCountry} />
              </Grid>
              <Grid item xs={12}>
                <Camera img={img} setParentImg={setImg} />
                <br />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button
                  onClick={() => navigate(navPaths["sign in"])}
                  //variant="body2"
                >
                  <Link>Already have an account? Sign in </Link>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
