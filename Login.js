import * as React from 'react';
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import  { useState } from "react";
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  FacebookLoginButton,
  GoogleLoginButton,    
  AppleLoginButton,   
} from "react-social-login-buttons";
import {	
	IconButton,
	InputAdornment, 
} from "@mui/material";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) =>({
   
  paper: {
    background: theme.background,
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    alignItems: 'center',
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    alignItems: 'center',
  },
  submit: {
    alignItems: 'center',
  },
}));


const theme = createTheme();

export default function SignUp() {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
})

const handlePassVisibilty = () => {
    setValues({
        ...values,
        showPass: !values.showPass,
    })
}
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="sm"  >
      <CssBaseline />
      <Box
        container
		    spacing={2}
		    direction="column"
		    alignItems="center"
		    justifyContent="center"
		    style={{ minHeight: '100vh' }}
      >
        <Paper elelvation={2} sx={{ padding: 5 }}>
        <div className={classes.paper}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main',alignItems: 'center', }}>
          <LockOutlinedIcon />
        </Avatar>
        </div>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          
            <Grid item xs={12}>
              <TextField
                variant="outlined"
				margin="normal"
				required
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
				autoFocus
              />
            
            
            <Grid item xs={12}>
              <TextField
                type={values.showPass ? "text" : "password"}
                fullWidth
                label="Password"
                placeholder="Password"
                variant="outlined"
                required
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handlePassVisibilty}
                                aria-label="toggle password"
                                edge="end"
                            >
                              {values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Remember Me"
              />
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

          <Grid item>
              <Divider>
                OR
              </Divider>
            </Grid>

            <Grid item xs={12} >
                <GoogleLoginButton />
            </Grid>
            
            <Grid item xs={12}>
                <FacebookLoginButton />
            </Grid>

            <Grid item xs={12}>
                <AppleLoginButton />
            </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
        </Paper>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  </ThemeProvider>
);
}
