import React from "react";
import { CircularProgress, Box } from "@mui/material";

const LoadingCircle = () => {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <CircularProgress />
      </Box>
    </div>
  );
};
export default LoadingCircle;
