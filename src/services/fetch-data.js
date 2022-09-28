/* eslint-disable no-undef */
import axios from "axios";
import { API_KEY, API_URL } from "../constants/constants";

export const getDepartments = (cityName) => {
  return axios
    .post(API_URL, {
      apiKey: API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: cityName,
        TypeOfWarehouseRef: "841339c7-591a-42e2-8233-7a0a00f0ed6f",
        Limit: "500",
      },
    })
    .then((resp) => resp.data.data);
};

export const getPackageInfo = (packageNumber) => {
  return axios
    .post(API_URL, {
      apiKey: API_KEY,
      modelName: "TrackingDocument",
      calledMethod: "getStatusDocuments",
      methodProperties: {
        Documents: [
          {
            DocumentNumber: packageNumber,
            Phone: "",
          },
        ],
      },
    })
    .then((resp) => {
      return resp.data.data[0];
    });
};
