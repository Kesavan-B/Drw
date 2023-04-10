import { Box } from "@mui/material";
import React from "react";
import Datacrd from "./Datacrd";


export const Crds = () => {
  return (
    <Box
      sx={{
        background: "#fff",
        height: "75vh",
        width: "100%",
        borderRadius: "10px",
      }}
    >
      <Box>
    <Datacrd/>
      </Box>
    </Box>
  );
};
