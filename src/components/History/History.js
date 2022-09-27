/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import { Box, List, ListItem, Typography, Button } from "@mui/material";
import "./style.css";
export const History = ({ history, clearStorage, onHistoryItemClick }) => {
  // const onDeleteClick = () => {
  //     clearStorage();
  // }

  return (
    <Box className='history-section'>
      <Typography variant='h5'>Історія:</Typography>
      <List>
        {history.map((ttn, i) => (
          <ListItem key={i} onClick={() => onHistoryItemClick(ttn)} button>
            {ttn}
          </ListItem>
        ))}
      </List>
      <Button className='history-delete-btn' variant='contained' color='error'>
        Видалити
      </Button>
    </Box>
  );
};
