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
import FormPageButtons from "../../Shared/Forms/FormPageButtons";

const MySwal = withReactContent(Swal);

const default_profile_img =
  "https://www.pngkit.com/png/full/126-1262807_instagram-default-profile-picture-png.png";
// const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  let user = {};
  const [img, setImg] = useState(null);
  const [country, setCountry] = useState(null);

  const getCountry = (countryProp) => {
    setCountry(countryProp);
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
        return res.json();
      })
      .then(
        (result) => {
          if (result === -1) {
            MySwal.fire({
              background:
                global.config.theme === "dark"
                  ? global.config.darkBG
                  : global.config.lightBG,
              color: global.config.theme === "dark" ? "white" : "black",
              icon: "error",
              title: "Oops...",
              text: "Email adress already taken",
              footer: "please try another one",
            });
          } else {
            signUpSuccess();
            MySwal.fire({
              background:
                global.config.theme === "dark"
                  ? global.config.darkBG
                  : global.config.lightBG,
              color: global.config.theme === "dark" ? "white" : "black",
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

    postUser(user);
  };

  const formValues = {
    //label: [fieldName, fieldValue, autoComplete, inputProps, sx]
    "First Name": [
      "firstName",
      user.FirstName,
      "given-name",
      { minLength: 2, maxLength: 15 },
      { autoFocus: true, required: true },
    ],
    "Last Name": [
      "lastName",
      user.LastName,
      "family-name",
      { minLength: 2, maxLength: 15 },
      { required: true },
    ],
    Email: [
      "email",
      user.Email,
      "email",
      { pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$" },
      { required: true },
    ],
    Password: [
      "password",
      "",
      "new-password",
      { minLength: 6 },
      { type: "password", required: true },
    ],
  };

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
            {Object.keys(formValues).map((formVal) => (
              <FormField
                xs={12}
                //sm={6}
                label={formVal}
                fieldName={formValues[formVal][0]}
                fieldValue={formValues[formVal][1]}
                autoComplete={formValues[formVal][2]}
                inputProps={formValues[formVal][3]}
                sx={formValues[formVal][4]}
              />
            ))}
            <Grid item xs={12}>
              <CountrySelect id="country" sendToForm={getCountry} />
            </Grid>

            <Grid item xs={12}>
              <Camera img={img} setParentImg={setImg} />
              <br />
            </Grid>
          </Grid>
          <FormPageButtons
            primaryButtonText={"Sign Up"}
            linkText={"Already have an account? Sign In"}
            navPathKey={"sign in"}
            buttonColor={"success"}
          />
          {/* <ButtonsContainer /> */}
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
    // </ThemeProvider>
  );
}
