import React, { useState } from "react";
import { CheckStatus } from "../CheckStatus/CheckStatus";
import { DepartmentList } from "../DepartmentList/DepartmentList";
import { Container, ToggleButton, ToggleButtonGroup } from '@mui/material'


import './style.css'

export const MainPage = () => {
  const [isStatus, setIsStatus] = useState(true);
  const [isDepartments, setIsDepartments] = useState(false);
  const [alignment, setAlignment] = useState('status');

  const onCheckClick = () => {
    setIsStatus(true);
    setIsDepartments(false)
  }

  const onDepartmentClick = () => {
    setIsStatus(false)
    setIsDepartments(true)
  }
  
  const handleChange = (e, newAlignment) => {
    setAlignment(newAlignment);
  };

    return <Container id="container">
        <ToggleButtonGroup id="top-buttons" color="error" exclusive
          onChange={handleChange}
          value={alignment}
          aria-label="Platform">
          <ToggleButton id="top-btn-left" onClick={onCheckClick} value='status' >Check Status TTN</ToggleButton>
          <ToggleButton id="top-btn-right" onClick={onDepartmentClick} value='departments'>Departments List</ToggleButton>
        </ToggleButtonGroup>
        {isStatus && !isDepartments ? <CheckStatus /> : <DepartmentList/>}

    </Container>
}