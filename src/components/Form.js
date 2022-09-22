import React from "react";
import {Box, TextField, Button} from '@mui/material'
import { PackageInfo } from "./PackageInfo";

export const Form  = () => {
    return <Box>
        <TextField type='text'/>
        <Button>Get Status TTN</Button>
        <PackageInfo></PackageInfo>
    </Box>
}