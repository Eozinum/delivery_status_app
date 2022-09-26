import React from "react";
import {Box, Typography} from '@mui/material'
import './style.css'
export const PackageInfo = () => {
    return (
    <Box className="delivery-status-section">
        <Typography><span className="bold">Delivery status:</span> Одержано</Typography>
        <Typography><span className="bold">Sent:</span> Відділення №17 (до 30 кг): вул. Розумовська, 29</Typography>
        <Typography><span className="bold">Received:</span> Відділення №13 (до 30 кг): просп. Гагаріна, 43</Typography>
    </Box>
    )
}

