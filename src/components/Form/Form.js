import React from "react";
import { Box, TextField, Button } from "@mui/material";
import "./style.css";

export const Form = () => {
  return (
    <Box className="form-section">
      <TextField
        label="Enter TTN"
        color="error"
        focused
        className="input-form"
        type="text"
      />
      <Button className="btn-form" variant="contained" color="error">
        Get Status TTN
      </Button>
    </Box>
  );
};
