import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Stack,
  Link,
  Typography,
} from "@mui/material";

import { AuthLayout } from "../layout/";
import { LoginTextField } from "../components/CustomComponents";

import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";

export const RegisterPage = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", minWidth: "100vw", padding: 4 }}
    >
      <AuthLayout
        title="Register"
        description="Enter your information to create an account"
      >
        <form>
          <Grid container mt={7}>
            <Grid item xs={12} sx={{ mb: 4 }}>
              <LoginTextField
                type="text"
                placeholder="Enter your Full Name"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
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
                Create account
              </Button>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>

      <Box sx={{ mt: 8 }}>
        <Typography
          sx={{ color: "border.light", fontWeight: "500", fontSize: "base" }}
        >
          Do you have an account?{" "}
          <Link
            component={RouterLink}
            underline="none"
            color="primary.light"
            to="/auth/login"
          >
            Sign in
          </Link>
        </Typography>
      </Box>
    </Stack>
  );
};
