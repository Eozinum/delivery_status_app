import React from "react";
import {Box, Typography, List, ListItem, TextField, Button} from '@mui/material';
import './style.css';

export const DepartmentList = () => {
    return <Box className="departments-container">
        <Typography variant="h5">Deparments</Typography>
        <Box className="departments-form">
        <TextField className='departments-form-input' label="Enter city" color="error" focused type='text'/>
        <Button id='departments-form-btn' variant="contained" color="error">Get departments</Button>
    </Box>
        <List>
            <ListItem>Department 1</ListItem>
            <ListItem>Department 2</ListItem>
            <ListItem>Department 3</ListItem>
        </List>
    </Box>
}