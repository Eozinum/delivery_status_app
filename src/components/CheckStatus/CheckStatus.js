/* eslint-disable no-unused-vars */
import React, { useState }  from "react";
import { History } from "../History/History";
import {PackageInfo} from '../PackageInfo/PackageInfo'
import {Box, TextField, Button, Modal, Backdrop, Typography, Fade } from '@mui/material'
import './style.css'
import { getPackageInfo } from "../../services/fetch-data";
import { checkTtnNumber } from "../../services/check-input";
import { INITIAL_PACKAGE_INFO } from "../../constants/constants";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export const CheckStatus = () => {
    const [packageTTN, setPackageTTN] = useState('');
    const [packageInfo, setPackageInfo] = useState(INITIAL_PACKAGE_INFO);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const onInputChange = (e) => {
        if (checkTtnNumber(e.target.value) === true) {
        setPackageTTN(e.target.value);
    } else {
        setPackageTTN('')   
    }
    }

    const onBtnClick = () => {
        if(!packageTTN) {
            setOpen(true)
        } else {
        getPackageInfo(packageTTN).then((data) => setPackageInfo(data))
    }
    }

    return ( 
    <>
        <Box className="form-section">
      <TextField
        onChange={onInputChange}
        label="Enter TTN"
        color="error"
        focused
        className="input-form"
        type="text"
      />
      <Button className="btn-form" onClick={onBtnClick} variant="contained" color="error">
        Перевірити статус
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Помилка!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Невірний номер ТТН
          </Typography>
        </Box>
      </Modal>
    </Box>
        <Box className="check-status-history-section">   
            <PackageInfo status={packageInfo.Status} sent={packageInfo.WarehouseSender} got={packageInfo.WarehouseRecipient}/>
            <History numberTTN={packageInfo.Number}/>
        </Box>
    </>
    )
}

