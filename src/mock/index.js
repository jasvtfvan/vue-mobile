import Mock from 'mockjs';
import userController from './modules/user';
import { LOGIN, LOGOUT, GET_USER_INFO } from '@/constants/apiTypes';
const baseURL = process.env.BASE_URL;

Mock.setup({ timeout: '500-2000' });

Mock.mock(new RegExp(`${baseURL}${LOGIN}` + `.*`), 'post', userController.login);
Mock.mock(new RegExp(`${baseURL}${LOGOUT}` + `.*`), userController.logout);
Mock.mock(new RegExp(`${baseURL}${GET_USER_INFO}` + `.*`), 'get', userController.getUserInfo);

export default Mock;
