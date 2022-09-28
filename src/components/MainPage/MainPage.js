import React, { useState } from "react";
import { CheckStatus } from "../CheckStatus/CheckStatus";
import { DepartmentList } from "../DepartmentList/DepartmentList";
import { Container, ToggleButton, ToggleButtonGroup } from "@mui/material";
import "./style.css";

export const MainPage = () => {
  const [isStatus, setIsStatus] = useState(true);
  const [isDepartments, setIsDepartments] = useState(false);
  const [alignment, setAlignment] = useState("status");

  const onCheckClick = () => {
    setIsStatus(true);
    setIsDepartments(false);
  };

  const onDepartmentClick = () => {
    setIsStatus(false);
    setIsDepartments(true);
  };

  const handleChange = (e, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Container className="container">
      <ToggleButtonGroup
        className="top-buttons"
        color='error'
        exclusive
        onChange={handleChange}
        value={alignment}
        aria-label='Platform'
      >
        <ToggleButton className='top-btn-left' onClick={onCheckClick} value='status'>
          Перевірити статус ТТН
        </ToggleButton>
        <ToggleButton
          className='top-btn-right'
          onClick={onDepartmentClick}
          value='departments'
        >
          Список відділень
        </ToggleButton>
      </ToggleButtonGroup>
      {isStatus && !isDepartments ? <CheckStatus /> : <DepartmentList />}
    </Container>
  );
};
