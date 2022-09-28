/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { History } from "../History/History";
import { PackageInfo } from "../PackageInfo/PackageInfo";
import { Box, TextField, Button, Modal, Typography } from "@mui/material";
import { getPackageInfo } from "../../services/fetch-data";
import { isValidTTN } from "../../services/check-input";
import { INITIAL_PACKAGE_INFO, style_modal } from "../../constants/constants";
import {
  addToStorage,
  getAllItems,
  clearStorage,
} from "../../services/storage";
import "./style.css";

export const CheckStatus = () => {
  const [packageTTN, setPackageTTN] = useState("");
  const [packageInfo, setPackageInfo] = useState(INITIAL_PACKAGE_INFO);
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState(getAllItems());
  const handleClose = () => setOpen(false);

  const onHistoryItemClick = (numberTTN) => {
    getPackageInfo(numberTTN).then((data) => setPackageInfo(data));
    setPackageTTN(numberTTN);
  };

  const onInputChange = (e) => {
    setPackageTTN(e.target.value);
  };

  const onBtnClick = () => {
    if (!isValidTTN(packageTTN)) {
      setOpen(true);
    } else {
      setHistory((prevHistory) => {
        const store = [...prevHistory, packageTTN];
        addToStorage(store);
        return store;
      });
      getPackageInfo(packageTTN).then((data) => setPackageInfo(data));
    }
  };

  const onDeleteClick = () => {
    clearStorage();
    setHistory([]);
    setPackageInfo(INITIAL_PACKAGE_INFO);
    setPackageTTN("");
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
          value={packageTTN}
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
        <History
          history={history}
          onHistoryItemClick={onHistoryItemClick}
          onDelete={onDeleteClick}
        />
      </Box>
    </>
  );
};
