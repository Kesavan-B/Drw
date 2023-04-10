import * as React from "react";


import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses
} from "@mui/material/CircularProgress";

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
        }}
        size={50}
        thickness={5}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        disableShrink
        sx={{
          color: "#2FE678",
          
          position: "absolute",
          left: 73,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round"
          }
        }}
        size={50}
        thickness={5}
        {...props}
        value={80}
      />
    </Box>
  );
}

export default function CustomizedProgressBars() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FacebookCircularProgress />
    </Box>
  );
}
