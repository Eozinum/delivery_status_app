/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { History } from "../History/History";
import { PackageInfo } from "../PackageInfo/PackageInfo";
import { Box, TextField, Button, Modal, Typography } from "@mui/material";
import "./style.css";
import { getPackageInfo } from "../../services/fetch-data";
import { checkTtnNumber } from "../../services/check-input";
import { INITIAL_PACKAGE_INFO } from "../../constants/constants";
import { style_modal } from "../../constants/constants";
import { addToStorage } from "../../services/storage";
import { getAllItems, clearStorage } from "../../services/storage";

export const CheckStatus = () => {
  const [packageTTN, setPackageTTN] = useState("");
  const [packageInfo, setPackageInfo] = useState(INITIAL_PACKAGE_INFO);
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([]);
  // const storage = getAllItems();
  const handleClose = () => setOpen(false);

  const onInputChange = (e) => {
    if (checkTtnNumber(e.target.value) === true) {
      setPackageTTN(e.target.value);
    } else {
      setPackageTTN("");
    }
  };

  const onBtnClick = () => {
    if (!packageTTN) {
      setOpen(true);
    } else {
      setHistory((prevHistory) => [...prevHistory, packageTTN]);
      getPackageInfo(packageTTN).then((data) => setPackageInfo(data));
    }
  };

  return (
    <>
      <Box className='form-section'>
        <TextField
          onChange={onInputChange}
          label='Введіть ТТН'
          color='error'
          focused
          className='input-form'
          type='text'
        />
        <Button
          className='btn-form'
          onClick={onBtnClick}
          variant='contained'
          color='error'
        >
          Перевірити статус
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
              Невірний номер ТТН
            </Typography>
          </Box>
        </Modal>
      </Box>
      <Box className='check-status-history-section'>
        <PackageInfo
          status={packageInfo.Status}
          sent={packageInfo.WarehouseSender}
          got={packageInfo.WarehouseRecipient}
        />
        <History history={history} clearStorage={clearStorage} />
      </Box>
    </>
  );
};
