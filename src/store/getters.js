const getters = {
  token: state => state.user.token,
  isLogin: state => state.user.isLogin,
  userInfo: state => state.user.userInfo,
  menuIndex: state => state.menu.index,
};
export default getters;
