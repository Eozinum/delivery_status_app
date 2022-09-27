/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import { Box, List, ListItem, Typography, Button } from "@mui/material";
import "./style.css";
import { useState } from "react";
export const History = ({ history, clearStorage }) => {
  // const onDeleteClick = () => {
  //     clearStorage();
  // }

  return (
    <Box className='history-section'>
      <Typography variant='h5'>Історія:</Typography>
      <List>
        {history.map((item) => (
          <ListItem key={item} button>
            {item}
          </ListItem>
        ))}
      </List>
      <Button className='history-delete-btn' variant='contained' color='error'>
        Видалити
      </Button>
    </Box>
  );
};
