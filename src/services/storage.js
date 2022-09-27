/* eslint-disable no-undef */
export const addToStorage = (store) => {
  localStorage.setItem("delivery_app", JSON.stringify(store));
};

export const clearStorage = () => {
  localStorage.removeItem("delivery_app");
};

export const getAllItems = () => {
  if (localStorage.getItem("delivery_app")) {
    return JSON.parse(localStorage.getItem("delivery_app"));
  } else {
    return [];
  }
};
