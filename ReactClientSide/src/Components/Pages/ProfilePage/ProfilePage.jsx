import { React, useState } from "react";
import "../../Shared/Forms/FormStyles.css";
import FormField from "../../Shared/Forms/FormField";
import Copyright from "../../Shared/UserDetails/Copyright";
import Camera from "../../Shared/Camera/Camera";
import { apiUrlUsers } from "../../Configs/apiUrlsKeys";
import { navPaths } from "../../Configs/navPaths";
import {
  getLoggedUser,
  getRememberMe,
  saveUserLocalStorage,
} from "../../Configs/getLoggedUser";
import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import FormPageButtons from "../../Shared/Forms/FormPageButtons";
import "../../Configs/Global";
//import CountrySelect from "../Functional Components/CountrySelect";

const MySwal = withReactContent(Swal);

const default_profile_img =
  "https://www.pngkit.com/png/full/126-1262807_instagram-default-profile-picture-png.png";

const theme = createTheme();

export default function ProfilePage() {
  const navigate = useNavigate();
  let user = getLoggedUser();
  const [img, setImg] = useState(user.Picture);
  // const [country, setCountry] = useState(user.Address);

  // const getCountry = (countryProp) => {
  //   setCountry(countryProp);
  // };

  const updateUser = () => {
    fetch(apiUrlUsers, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        return res.ok;
      })
      .then(
        (result) => {
          if (!result) {
            MySwal.fire({
              background:
                global.config.theme === "dark"
                  ? global.config.darkBG
                  : global.config.lightBG,
              color: global.config.theme === "dark" ? "white" : "black",
              icon: "error",
              title: "Oops...",
              text: "Failed to update profile",
            });
          } else {
            updateSuccess(user);
            MySwal.fire({
              background:
                global.config.theme === "dark"
                  ? global.config.darkBG
                  : global.config.lightBG,
              color: global.config.theme === "dark" ? "white" : "black",
              position: "center",
              icon: "success",
              title: "Profile Updated!",
              showConfirmButton: false,
              timer: 800,
            });
          }
        },
        (error) => {
          console.log("Error updating profile: ", error);
        }
      );
  };

  const updateSuccess = (updated_user) => {
    let passWasUpdated = updated_user.Password !== "-1";
    if (passWasUpdated) {
      localStorage.clear();
      navigate(navPaths["sign in"]);
    } else {
      updated_user.Password = null;
      saveUserLocalStorage(updated_user, getRememberMe());
      navigate(navPaths["home"]);
    }
  };

  //Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    let updated_user = {};

    const data = new FormData(event.currentTarget);

    updated_user = {
      Id: user.Id,
      FirstName:
        data.get("firstName").length !== 0
          ? data.get("firstName")
          : user.FirstName,
      LastName:
        data.get("lastName").length !== 0
          ? data.get("lastName")
          : user.LastName,
      Email: user.Email,
      Password: data.get("password").length !== 0 ? data.get("password") : "-1",
      // address: country,
      Picture: img ? img : default_profile_img,
    };
    user = updated_user;

    MySwal.fire({
      background:
        global.config.theme === "dark"
          ? global.config.darkBG
          : global.config.lightBG,
      color: global.config.theme === "dark" ? "white" : "black",
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        updateUser();
      } else if (result.isDenied) {
        MySwal.fire({
          background:
            global.config.theme === "dark"
              ? global.config.darkBG
              : global.config.lightBG,
          color: global.config.theme === "dark" ? "white" : "black",
          title: "Changes are not saved",
          icon: "info",
        });
      }
    });
  };

  const formValues = {
    //label: [fieldName, fieldValue, autoComplete, inputProps, sx]
    "First Name": [
      "firstName",
      user.FirstName,
      "given-name",
      { minLength: 2, maxLength: 15 },
      { autoFocus: true },
    ],
    "Last Name": [
      "lastName",
      user.LastName,
      "family-name",
      { minLength: 2, maxLength: 15 },
      "",
    ],
    Email: ["email", user.Email, "email", { readOnly: true }, ""],
    Password: [
      "password",
      "",
      "new-password",
      { minLength: 6 },
      { type: "password" },
    ],
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="formContainer">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            {`${user.FirstName} ${user.LastName}'s Profile`}
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
                <Camera img={img} setParentImg={setImg} />
                <br />
              </Grid>
            </Grid>
            <FormPageButtons
              primaryButtonText={"Update Profile"}
              linkText={"Return To Home Page"}
              navPathKey={"home"}
              buttonColor={"success"}
            />
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
