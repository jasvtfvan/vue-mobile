import axios from 'axios';
import {$vux} from '@/main';
import store from '@/store';
import {VUX_LOADING} from '@/constants/publicTypes';
import {LOGOUT} from '@/constants/apiTypes';
import router from '@/router';
const baseURL = process.env.BASE_URL;
const mock = process.env.USER_MOCK;

axios.defaults.timeout = 2 * 60 * 1000;
axios.defaults.baseURL = baseURL;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

const safeLock = {};
let lockKey = '';
let httpConfig = {};

/**
 * url: 请求地址
 * method: get,post等方法
 * data: 请求数据
 * headers: 请求头
 * isSafe: 防止axios重复请求，默认是
 * showLoading: 启动loading遮罩层，默认否
 * isAuth: 是否需要token验证，默认是
 * showMessage: 启动异常提醒toast，默认是
 * useServerCache: 是否使用服务器缓存，默认不使用
 * 
 * 其他参数可灵活配置
 */
// axios.interceptors.request.use(
//   config => {
//     httpConfig = config;

//     config['headers'] = config.headers ? config.headers : {};
//     config['method'] = config.method ? config.method : 'post';
//     config['data'] = config.data ? config.data : {};
//     config['url'] = config.url ? config.url : '';

//     //防止axios重复请求，默认是
//     config['isSafe'] = _.isUndefined(config['isSafe']) ? true : !!config['isSafe'];

//     //启动loading遮罩层，默认否
//     config['showLoading'] = !!config['showLoading'];
//     if (config['showLoading']) {
//       store.commit(VUX_LOADING, {isLoading: true});
//     }

//     //是否需要token验证，默认是
//     config['isAuth'] = _.isUndefined(config['isAuth']) ? true : !!config['isAuth'];
//     if (config['isAuth']) {
//       config.headers[config.method]['Authorization'] = store.getters.token;
//       if (mock) { //如果使用mock,则将token放到data中，便于mock接收
//         config.data['Authorization'] = store.getters.token;
//       }
//     }

//     //启动异常提醒toast，默认是
//     config['showMessage'] = _.isUndefined(config['showMessage']) ? true : !!config['showMessage'];

//     config.headers[config.method]['X-Requested-With'] = config.headers['X-Requested-With'] || 'XMLHttpRequest';
//     const contentType = config.headers['Content-Type'] || config.headers[config.method]['Content-Type'];
//     const method = config.method;
//     if (contentType && contentType.includes('application/x-www-form-urlencoded')) {
//       //ContentType是application/x-www-form-urlencoded，则需要将json数据序列化
//       config['data'] = qs.stringify(config.data);
//     }

//     //根据请求url加锁，防止重复提交
//     lockKey = config.url;
//     if (config.isSafe) {
//       if (_.isUndefined(safeLock[lockKey])) {
//         safeLock[lockKey] = "1";
//       } else {
//         return new Promise((resolve, reject) => {});
//       }
//     }

//     //是否使用服务器缓存，默认不使用
//     config['useServerCache'] = !!config.useServerCache;
//     if (!config.useServerCache) {
//       if (config.url.indexOf('?') === -1) {
//         config.url += ('?random=' + new Date().getTime());
//       } else if (config.url.indexOf('?') === (config.url.length - 1)) {
//         config.url += ('random=' + new Date().getTime());
//       } else {
//         config.url += ('&random=' + new Date().getTime());
//       }
//     }

//     return config;
//   }, 
//   error => {
//     if (httpConfig['showLoading']) {
//       store.commit(VUX_LOADING, {isLoading: false});
//     }
//     if (httpConfig.isSafe) {
//       delete safeLock[lockKey];
//     }

//     if (httpConfig['showMessage']) {
//       $vux.toast.show({
//         text: '请求参数错误：' + error,
//         type: 'warn'
//       });
//     }

//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   res => {
//     if (httpConfig['showLoading']) {
//       store.commit(VUX_LOADING, {isLoading: false});
//     }

//     const status = res.status;
//     if (status === 200 || status === 304) {
//       if (httpConfig.isSafe) {
//         delete safeLock[lockKey];
//       }
//       const resData = res.data || {};
//       //业务异常在这里提示，并返回给调用者
//       if (!resData.success && httpConfig['showMessage']) {
//         $vux.toast.show({
//           text: resData.message || '没有成功返回数据',
//           type: 'warn'
//         });
//       }
//       return resData;
//     }

//     return Promise.reject(res);
//   }, 
//   error => {  //后台系统异常在error中处理
//     if (httpConfig['showLoading']) {
//       store.commit(VUX_LOADING, {isLoading: false});
//     }
//     if (httpConfig.isSafe) {
//       delete safeLock[lockKey];
//     }

//     let data = error;
//     const res = error.response;
//     if (res) {
//       data = res;
//       if (res.data) {
//         data = res.data;
//       }
//       const status = res.status;
//       const isLogin = store.getters.isLogin;
//       if (status === 401 && isLogin) {
//         if (httpConfig['showMessage']) {
//           $vux.toast.show({
//             text: '登录超时，请重新登录'
//           });
//         }
//         store.commit(LOGOUT);
//         router.replace({
//           path: '/',
//           query: {redirect: router.currentRoute.fullPath}
//         }, () => {
//           // location.reload();
//         });
//       }
//     } else {
//       if (httpConfig['showMessage']) {
//         $vux.toast.show({
//           text: data.message || '网路异常',
//           type: 'warn'
//         });
//       }
//     }

//     return Promise.reject(data);
//   }
// );
