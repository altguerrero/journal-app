import React from "react";
import { Link as RouterLink } from "react-router-dom";
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
        <form>
          <Grid container mt={7}>
            <Grid item xs={12} sx={{ mb: 4 }}>
              <LoginTextField
                type="email"
                placeholder="Enter your email address"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 4 }}>
              <LoginTextField
                placeholder="Enter your password"
                type="password"
                fullWidth
                autoComplete="off"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
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
