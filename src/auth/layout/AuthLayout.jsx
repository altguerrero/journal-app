import { Box, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "", description = "" }) => {
  return (
    <Box
      xs={3}
      sx={{
        width: 600,
        backgroundColor: "#fff",
        padding: 6,
        borderRadius: 3,
        boxShadow: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "text.primary",
          fontSize: "3xl",
          fontWeight: "bold",
          textAlign: "center",
          mb: 1,
          mt: 1,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "xl",
          mb: 1,
          color: "border.light",
          textAlign: "center",
        }}
      >
        {description}
      </Typography>

      {children}
    </Box>
  );
};
