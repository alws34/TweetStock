import { createTheme } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: blueGrey,
  },
  components: {
    text: {
      style: { color: "" },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

