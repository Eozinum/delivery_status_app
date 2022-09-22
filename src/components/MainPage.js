import React, { useState } from "react";
import { CheckStatus } from "./CheckStatus";
import { DepartmentList } from "./DepartmentList";
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

export const MainPage = () => {
  const [isStatus, setIsStatus] = useState(true);
  const [isDepartments, setIsDepartments] = useState(false)

  const onCheckClick = () => {
    setIsStatus(true);
    setIsDepartments(false)
  }

  const onDepartmentClick = () => {
    setIsStatus(false)
    setIsDepartments(true)
  }
  const [alignment, setAlignment] = useState('status');

  const handleChange = (e, newAlignment) => {
    setAlignment(newAlignment);
  };


    return <>
        <ToggleButtonGroup color="error" exclusive
          onChange={handleChange}
          value={alignment}
          aria-label="Platform">
          <ToggleButton onClick={onCheckClick} value='status' >Check Status TTN</ToggleButton>
          <ToggleButton onClick={onDepartmentClick} value='departments'>Departments List</ToggleButton>
        </ToggleButtonGroup>
        {isStatus && !isDepartments ? <CheckStatus /> : <DepartmentList/>}

    </>
}