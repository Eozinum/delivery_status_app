/* eslint-disable react/prop-types */
import React from "react";
import { Box, Typography } from "@mui/material";
import "./style.css";

export const PackageInfo = ({ status, sent, got }) => {
  return (
    <Box className='delivery-status-section'>
      <Typography className='delivery-status-text' >
        <span className='bold'>Статус відправлення:</span> {status}
      </Typography>
      <Typography className='delivery-status-text'>
        <span className='bold'>Відправлено:</span> {sent}
      </Typography>
      <Typography className='delivery-status-text'>
        <span className='bold'>Отримано:</span> {got}
      </Typography>
    </Box>
  );
};
