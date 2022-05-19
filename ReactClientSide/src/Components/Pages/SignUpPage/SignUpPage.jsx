import * as React from "react";
import { useState, useRef } from "react";
import "../../Shared/Forms/FormStyles.css";
import CountrySelect from "../../Shared/UserDetails/CountrySelect";
import Camera from "../../Shared/Camera/Camera";
import Copyright from "../../Shared/UserDetails/Copyright";
import FormField from "../../Shared/Forms/FormField";
import { apiUrlUsers } from "../../Configs/apiUrlsKeys";
//import { getRememberMe, saveUserLocalStorage } from "../Configs/getLoggedUser";
import { navPaths } from "../../Configs/navPaths";
import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const default_profile_img =
  "https://www.pngkit.com/png/full/126-1262807_instagram-default-profile-picture-png.png";
// const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  let user = {};
  const [img, setImg] = useState(null);
  //const [encodeImg, setEncodeImg] = useState("");
  const [country, setCountry] = useState(null);
  // const webRef = useRef(null);

  // const showImage = () => {
  //   let imgBefore = btoa(webRef.current.getScreenshot(), "Base64");
  //   setEncodeImg(imgBefore);
  //   let imgAfter = atob(imgBefore, "Base64");
  //   setImg(imgAfter);
  //   setImg(webRef.current.getScreenshot());
  //   console.log(imgBefore);
  //   console.log(imgAfter);
  //   console.log(webRef.current.getScreenshot())
  //   console.log("shoot");
  // };

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

  const ButtonsContainer = () => (
    <div className="buttonsContainer">
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        color="success"
      >
        Sign Up
      </Button>
      <Grid container>
        <Grid item>
          <Button onClick={() => navigate(navPaths["sign in"])} variant="body2">
            <Link>Already have an account? Sign In</Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
  return (
    // <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box className="formContainer">
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <FormField
              xs={12}
              sm={6}
              label="First Name"
              autoComplete="given-name"
              fieldName="firstName"
              fieldValue={user.FirstName}
              inputProps={{
                minlength: 2,
                maxlength: 15,
              }}
              sx={{
                autoFocus: true,
                required: true,
              }}
            />
            <FormField
              xs={12}
              sm={6}
              label="Last Name"
              autoComplete="family-name"
              fieldName="lastName"
              fieldValue={user.LastName}
              inputProps={{
                minlength: 2,
                maxlength: 15,
              }}
              sx={{ required: true }}
            />
            <FormField
              xs={12}
              label="Email Address"
              autoComplete="email"
              fieldName="email"
              fieldValue={user.Email}
              inputProps={{
                pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
              }}
              sx={{ required: true }}
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
              }}
            />

            <Grid item xs={12}>
              <CountrySelect id="country" sendToForm={getCountry} />
            </Grid>

            <Grid item xs={12}>
              <Camera img={img} setParentImg={setImg} />
              <br />
            </Grid>
          </Grid>
          <ButtonsContainer />
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
    // </ThemeProvider>
  );
}
