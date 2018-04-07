const getters = {
  token: state => state.user.token,
  isLogin: state => state.user.isLogin,
  userInfo: state => state.user.userInfo
};
export default getters;
