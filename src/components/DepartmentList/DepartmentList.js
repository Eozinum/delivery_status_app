import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  TextField,
  Button,
  Modal,
} from "@mui/material";
import { getDepartments } from "../../services/fetch-data";
import { isValidCityName } from "../../services/check-input";
import { style_modal } from "../../constants/constants";
import "./style.css";

export const DepartmentList = () => {
  const [cityName, setCityName] = useState("");
  const [departments, setDepartments] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const onInputChange = (e) => {
    setCityName(e.target.value);
  };

  const onBtnClick = () => {
    if (!isValidCityName(cityName)) {
      setOpen(true);
    } else {
      getDepartments(cityName).then((data) => setDepartments(data));
    }
  };

  return (
    <Box className='departments-container'>
      <Typography variant='h5'>Deparments</Typography>
      <Box className='departments-form'>
        <TextField
          onChange={onInputChange}
          className='departments-form-input'
          label='Введіть місто'
          color='error'
          focused
          type='text'
        />
        <Button
          onClick={onBtnClick}
          id='departments-form-btn'
          variant='contained'
          color='error'
        >
          Відобразити відділення
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style_modal}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Помилка!
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Вкажіть назву міста
            </Typography>
          </Box>
        </Modal>
      </Box>
      <List>
        {departments.map((department, i) => (
          <ListItem key={department.SiteKey}>
            {i + 1}. {department.Description}, {department.CityDescription}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
