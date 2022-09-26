import React from "react";
import {Box, Typography, List, ListItem} from '@mui/material';
import './style.css';

export const DepartmentList = () => {
    return <Box className="departments-container">
        <Typography variant="h5">Deparments</Typography>
        <List>
            <ListItem>Department 1</ListItem>
            <ListItem>Department 2</ListItem>
            <ListItem>Department 3</ListItem>
        </List>
    </Box>
}