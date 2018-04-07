/**
 * ***** 总则：如需在该文件修改配置，请只修改 "||" 后边的配置
 * 
 * (参考根目录下 /config/dev.env.js 和 /config/prod.env.js)
 */

//可使用npm命令 npm start --baseurl=http://www.hello.com:8080
export const baseURL = process.env.BASE_URL || 'http://localhost/mock';
//可使用npm命令 npm start --usemock=false
export const useMock = (process.env.USER_MOCK ? true : false) || false;
