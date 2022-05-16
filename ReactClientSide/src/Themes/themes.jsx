import { createTheme } from "@mui/material/styles";
import { blue, lightBlue, blueGrey } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: blueGrey,
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
