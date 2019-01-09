import axios from 'axios';
import '@/utils/http';
import {LOGIN, LOGOUT, GET_USER_INFO} from '@/constants/apiTypes';

export const login = (username, password) => {
  const data = {username, password};
  return axios.post (LOGIN, data, {
    isAuth: false,
    showLoading: true,
    test: 'test',
    headers: {
      testHeader: 'testHeader',
    },
  });
};

export const logout = () => {
  return axios.post (LOGOUT);
};

export const getUserInfo = () => {
  return axios.get (GET_USER_INFO, {showLoading: true});
};
