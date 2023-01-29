import { Button, TextField, styled } from "@mui/material";

export const LoginTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    padding: ".25rem 1.25rem",
    borderRadius: ".75rem",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.background.default,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.border.light,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const GoogleButton = styled(Button)(({ theme }) => ({
  borderColor: "#000",
  color: "#000",

  "&.MuiButtonBase-root:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    color: "#fff",
    border: "none",
  },
}));
