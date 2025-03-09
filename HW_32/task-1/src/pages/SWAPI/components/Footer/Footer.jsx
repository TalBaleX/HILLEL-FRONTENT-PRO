import React from "react";
import { Button, Box } from "@mui/material";

const Footer = ({ setUrl }) => {
  const clear = () => {
    setUrl("");
  };

  return (
    <Box component="footer" sx={{ mt: 4, textAlign: "center" }}>
      <Button variant="contained" color="warning" onClick={clear}>
        Clear
      </Button>
    </Box>
  );
};

export default Footer;
