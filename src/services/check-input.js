import { TTN_LENGTH } from "../constants/constants"

export const checkTtnNumber = (ttnNumber) => {
 return (!isNaN(ttnNumber) && ttnNumber.length === TTN_LENGTH) ? true : false
}