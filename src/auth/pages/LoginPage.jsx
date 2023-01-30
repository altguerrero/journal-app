import React from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/";
import { useForm } from "../../hooks/useForm";
import {
  Button,
  Divider,
  Grid,
  InputAdornment,
  Typography,
  Link,
  Box,
  Stack,
} from "@mui/material";

import { AuthLayout } from "../layout/";
import { GoogleButton, LoginTextField } from "../components/CustomComponents";

import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { email, password, formState, onInputChange } = useForm({
    email: "name@mail.com",
    password: "123456",
  });

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(checkingAuthentication(formState));
  };
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn(formState));
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", minWidth: "100vw", padding: 4 }}
    >
      <AuthLayout
        title="Welcome Back"
        description="Enter your credentials to access your account"
      >
        <form onSubmit={onSubmit}>
          <Grid container mt={7}>
            <Grid item xs={12} sx={{ mb: 4 }}>
              <LoginTextField
                type="email"
                name="email"
                placeholder="Enter your email address"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
                onChange={onInputChange}
                value={email}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 4 }}>
              <LoginTextField
                placeholder="Enter your password"
                type="password"
                name="password"
                fullWidth
                autoComplete="off"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
                onChange={onInputChange}
                value={password}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  height: "4rem",
                  borderRadius: ".75rem",
                  textTransform: "capitalize",
                  fontSize: "base",
                }}
                fullWidth
              >
                Sign in
              </Button>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, color: "border.light" }}>Or</Divider>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <GoogleButton
                variant="outlined"
                onClick={onGoogleSignIn}
                sx={{
                  height: "4rem",
                  borderRadius: ".75rem",
                  textTransform: "capitalize",
                  fontSize: "base",
                }}
                fullWidth
                startIcon={<GoogleIcon />}
              >
                Sign in with Google
              </GoogleButton>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>

      <Box sx={{ mt: 8 }}>
        <Typography
          sx={{ color: "border.light", fontWeight: "500", fontSize: "base" }}
        >
          Are you not registered?{" "}
          <Link
            component={RouterLink}
            underline="none"
            color="primary.light"
            to="/auth/register"
          >
            Create an account
          </Link>
        </Typography>
      </Box>
    </Stack>
  );
};
