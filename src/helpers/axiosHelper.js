import "dotenv/config";
import axios from "axios";
import * as constantHelper from "./constantHelper";

const { baseUrl } = constantHelper.backend;

export const API_STATUS = {
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
};

/**
 * A function used to pass the API url, JWT if existing as well as other axios properties to be added
 * @param data - additional data to be passed to the axios function
 * @since version 1.0
 */
export const axiosImpl = (data = {}) => {
  const { token } = data;
  const baseURL = baseUrl;
  const jwt =
    token || localStorage.getItem(constantHelper.JWT_TOKEN) || undefined;
  let headers = jwt && jwt !== "" ? { Authorization: `Bearer ${jwt}` } : "";
  if (data.headers) {
    headers = { ...headers, "content-type": data.headers["Content-Type"] };
  }
  return axios.create({ baseURL, headers });
};

export const getAxiosError = (error) => {
  return error.response
    ? error.response.data.message || error.response.data
    : error.message;
};
