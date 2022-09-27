/* eslint-disable react/prop-types */
import React from "react";
import {Box, Typography} from '@mui/material'
import './style.css'
export const PackageInfo = ({status, sent, got}) => {

    return (
    <Box className="delivery-status-section">
        <Typography><span className="bold">Delivery status:</span> {status}</Typography>
        <Typography><span className="bold">Sent:</span> {sent}</Typography>
        <Typography><span className="bold">Received:</span> {got}</Typography>
    </Box>
    )
}

