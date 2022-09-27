/* eslint-disable no-unused-vars */
import React from "react";
import {Box, Typography, List, ListItem, TextField, Button} from '@mui/material';
import './style.css';
import {getDepartments} from '../../services/fetch-data'
import { useState } from "react";

export const DepartmentList = () => {
    const [cityName, setCityName] = useState('');
		const [departments, setDepartments] = useState([]);
    const onInputChange = (e) => {
        setCityName(e.target.value);
    }
		
		const onBtnClick = () => {
			getDepartments(cityName).then((data) => setDepartments(data))
		}
		

    return (
    <Box className="departments-container">
        <Typography variant="h5">Deparments</Typography>
        <Box className="departments-form">
            <TextField onChange={onInputChange} className='departments-form-input' label="Введіть місто" color="error" focused type='text'/>
            <Button onClick={onBtnClick} id='departments-form-btn' variant="contained" color="error">Get departments</Button>
        </Box>
        <List>
					{departments.map((department) => <ListItem key={department.SiteKey}>{department.Description}, {department.CityDescription}</ListItem>)}
        </List>
    </Box>
    )
}