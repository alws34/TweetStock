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

//import CountrySelect from "../Functional Components/CountrySelect";

const MySwal = withReactContent(Swal);

const default_profile_img =
  "https://www.pngkit.com/png/full/126-1262807_instagram-default-profile-picture-png.png";

const theme = createTheme();

export default function ProfilePage() {
  const navigate = useNavigate();
  let user = getLoggedUser();
  const [img, setImg] = useState(user.Picture);
  const [country, setCountry] = useState(user.Address);

  const getCountry = (countryProp) => {
    setCountry(countryProp);
    console.log(country);
  };

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
        console.log("res=", res);
        return res.ok;
      })
      .then(
        (result) => {
          console.log("fetch PUT= ", result);
          if (!result) {
            MySwal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to update profile",
            });
          } else {
            updateSuccess(user);
            MySwal.fire({
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
      //console.log(updated_user);
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

    let pass = data.get("password").length !== 0 ? data.get("password") : "-1";
    console.log("pass", pass);
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
      Password: pass,
      // address: country,
      Picture: img ? img : default_profile_img,
    };
    user = updated_user;

    Swal.fire({
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
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const ButtonsContainer = () => {
    return (
      <div className="buttonsContainer">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          color="success"
        >
          Update Profile
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button
              onClick={() => navigate(navPaths["home"])}
              variant="contained"
              color="secondary"
            >
              Home Page
            </Button>
          </Grid>
        </Grid>
      </div>
    );
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
              />

              <FormField
                xs={12}
                label="Email"
                autoComplete="email"
                fieldName="email"
                fieldValue={user.Email}
                inputProps={{
                  readOnly: true,
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
                }}
              />

              {/* <Grid item xs={12}>
                <CountrySelect id="country" sendToForm={getCountry} />
              </Grid> */}

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
    </ThemeProvider>
  );
}
