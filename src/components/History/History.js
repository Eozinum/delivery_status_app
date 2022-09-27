/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import {Box, List, ListItem, Typography} from '@mui/material'
import './style.css'
import { useState } from "react";
export const History = ({numberTTN}) => {
    // const [allTtn, setAllTtn] = useState([]);

    return (
    <Box className="history-section">
        <Typography variant="h5">History:</Typography>
            <List>
                <ListItem button>{numberTTN}</ListItem>
                <ListItem button>20450590227047</ListItem>
                <ListItem button>20450590227047</ListItem>
            </List>
    </Box>
    )
}