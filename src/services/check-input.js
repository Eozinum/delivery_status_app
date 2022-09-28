import { TTN_LENGTH } from "../constants/constants";

export const isValidTTN = (ttnNumber) => {
  return !isNaN(ttnNumber) &&
    ttnNumber.length === TTN_LENGTH &&
    (ttnNumber.startsWith("1") ||
      ttnNumber.startsWith("2") ||
      ttnNumber.startsWith("5"))
    ? true
    : false;
};

export const isValidCityName = (cityName) => {
  if (!cityName) {
    return false;
  } else if (!isNaN(cityName)) {
    return false;
  } else {
    return true;
  }
};
