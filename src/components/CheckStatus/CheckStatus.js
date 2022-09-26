import React from "react";
import { Form } from "../Form/Form";
import { History } from "../History/History";
import {PackageInfo} from '../PackageInfo/PackageInfo'
import {Box} from '@mui/material'
import './style.css'


export const CheckStatus = () => {
    return <>
    <Form></Form>
    <Box className="check-status-history-section">   
        <PackageInfo />
        <History></History>
    </Box>
    </>
}