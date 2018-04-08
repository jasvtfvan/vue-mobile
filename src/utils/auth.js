/**
 * 不建议使用cookie，分析原因：
 * 1，build后以静态文件放入android/ios原生打包，cookie方式无效
 * 2，build后部署到服务器，android/ios原生利用webview加载，需要原生进行cookie同步处理
 * 3，前端服务和后端服务，如果跨域，则后端只能通过读取request的header获取cookie，
 *   而后端代码习惯采用Cookie.jar包中的api，导致技术概念混淆，进而给调试和项目进展代理麻烦
 * 4，前端服务和后端服务，在相同域下，无法将build后的静态文件放入android/ios原生打包，体验效果依赖网络
 */
/*
import Cookies from 'js-cookie'

const TokenKey = 'AdminToken'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
*/

const TokenKey = 'AdminToken';

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  localStorage.removeItem(TokenKey);
}
