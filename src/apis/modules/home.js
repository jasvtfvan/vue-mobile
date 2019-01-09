import axios from 'axios';
import {getParamString} from '@/utils/utils';

//保费计算
export const calculation = data => {
  return axios.post (
    'routerServices?param=' + getParamString (data.param),
    data.data
  ); //100146
};

//获取产品明细
export const getDetailByProductId = data => {
  return axios.post (
    'routerServices?param=' + getParamString (data.param),
    data.data
  ); //100146
};

//用户点击收藏
export const favorSave = data => {
  return axios.post (
    'routerServices?param=' + getParamString (data.param),
    data.data
  ); //100146
};


//用户取消收藏
export const favorDelete = data => {
  return axios.post (
    'routerServices?param=' + getParamString (data.param),
    data.data
  ); //100146
};

//获取手机验证码
export const getPhoneCode = data => {
  return axios.post (
    'routerServices?param=' + getParamString (data.param),
    data.data
  ); //100146
};


//获取用户列表
export const getUserList = data => {
  return axios.post (
    'routerServices?param=' + getParamString (data.param),
    data.data
  ); //100146
};


//订单添加 即核保
export const orderSave = data => {
  return axios.post (
    'routerServices?param=' + getParamString (data.param),
    data.data
  ); //100146
};



//获取银行开户行列表
export const getBankList = data => {
  return axios.post (
    'routerServices?param=' + getParamString (data.param),
    data.data
  ); //100146
};


//确认支付接口 (100149)国华支付出单
