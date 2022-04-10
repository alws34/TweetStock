import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { Link } from "react-router-dom";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CountrySelect from './CountrySelect';
import Webcam from "react-webcam";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {useRef} from "react";
import { useState } from 'react';

const apiUrlUsers = "http://localhost:52793/api/Users"; 


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '} TweetStock {new Date().getFullYear()}{'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  //Handle Country 
  const [country, setCountry] = useState(null);
  const getCountry = (countryProp)=>{
    setCountry(countryProp);
    console.log(country);
  }

  //Handle Webcam
  const webRef=useRef(null);
  const [img, setImg] = useState(null);
  const [encodeImg, setEncodeImg] = useState("");
  const showImage =() =>{
      let imgBefore= btoa(webRef.current.getScreenshot(), 'Base64');
      setEncodeImg(imgBefore);
      let imgAfter = atob(imgBefore, 'Base64');
      setImg(imgAfter);
      //setImg(webRef.current.getScreenshot());
      console.log(imgBefore);
      console.log(imgAfter);
      //console.log(webRef.current.getScreenshot())
      console.log("shoot");
  }

  const postUser = (user) => {
  fetch(apiUrlUsers, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: new Headers({
      'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
      'Accept': 'application/json; charset=UTF-8'
    })
  })
    .then(res => {
      console.log('res=', res);
      return res.json()
    })
    .then(
      (result) => {
        console.log("fetch POST= ", result);
      },
      (error) => {
        console.log("err post user=", error);
      });
  } 

  //Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      address: country, 
      picture: encodeImg
    });

    let user= {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      address: country,
      picture: "img"//encodeImg
    };
    postUser(user);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                />
              </Grid>
              <Grid item xs={12}>
                <CountrySelect id="country" sendToForm={getCountry}/>
              </Grid>
              <Grid item xs={12}>
                <Webcam ref={webRef}/>
                {/* <Button onClick={()=>showImage}/> */}
                <Button
                    fullWidth
                    // variant="outlined"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={showImage}
                >
                   <CameraAltIcon>Shoot</CameraAltIcon>
                </Button>
                
                <br />
                <img src={img} alt=""/>
                {/* TO DO: Save the img in the computer and then get the url and add it to the DB */}
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
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
                <Link href="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
