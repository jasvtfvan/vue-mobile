import axios from 'axios';
// import { baseUrl } from "../config/env";

export const getAxios = data => {
  return axios.create ({
    // baseURL: baseUrl,
    headers: {
      // Authorization: "Bearer " + data.token,
      // Authorization: data.token,
      // userId: data.userId,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  });
};
