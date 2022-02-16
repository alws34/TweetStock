import { React, useRef, useState, useEffect } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { apiUrlUsers } from "../Configs/apiUrlsKeys";
import { navPaths } from "../Configs/navPaths";
import {
  getLoggedUser,
  getRememberMe,
  saveUserLocalStorage,
} from "../Configs/getLoggedUser";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Camera from "../Camera";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CountrySelect from "../CountrySelect";

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

export default function ProfilePage() {
  const navigate = useNavigate();
  let user = getLoggedUser();
  const [img, setImg] = useState(user.Picture);
  const [country, setCountry] = useState(user.Address);

  const getCountry = (countryProp) => {
    setCountry(countryProp);
    console.log(country);
  };
  const UpdateUser = () => {
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
              title: "Profile Updated Saved!",
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

    let pass = data.get("password").length != 0 ? data.get("password") : "-1";
    console.log("pass", pass);
    updated_user = {
      Id: user.Id,
      FirstName:
        data.get("firstName").length != 0
          ? data.get("firstName")
          : user.FirstName,
      LastName:
        data.get("lastName").length != 0 ? data.get("lastName") : user.LastName,
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
        UpdateUser();
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
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
            {`${user.FirstName} ${user.LastName}'s Profile`}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  defaultValue={user.FirstName}
                  label="firstName"
                  autoFocus
                  inputProps={{
                    minlength: 2,
                    maxlength: 15,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  defaultValue={user.LastName}
                  label="lastName"
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
                  fullWidth
                  id="email"
                  defaultValue={user.Email}
                  label="email"
                  name="email"
                  autoComplete="email"
                  inputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputProps={{
                    minlength: 6,
                  }}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <CountrySelect id="country" sendToForm={getCountry} />
              </Grid> */}
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
              Update Profile
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button
                  onClick={() => navigate(navPaths["home"])}
                  variant="body2"
                >
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Back to Home
                  </p>
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
