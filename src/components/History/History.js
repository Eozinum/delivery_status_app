import React from "react";
import {Box, List, ListItem, Typography} from '@mui/material'
import './style.css'
export const History = () => {

    return <Box className="history-section">
        <Typography variant="h5">History:</Typography>
            <List>
                <ListItem button>20450590227047</ListItem>
                <ListItem button>20450590227047</ListItem>
                <ListItem button>20450590227047</ListItem>
            </List>
    </Box>
}