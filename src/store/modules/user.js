import { login, logout, getUserInfo } from '@/apis/modules/user';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { LOGIN, LOGOUT, GET_USER_INFO } from '@/constants/apiTypes';

const user = {
  state: {
    token: getToken(),
    isLogin: false,
    userInfo: {},
  },
  mutations: {
    [LOGIN](state, data) {
      state.token = data;
      setToken(data);
      state.isLogin = true;
    },
    [LOGOUT](state, data) {
      removeToken();
      state.token = null;
      state.isLogin = false;
      state.userInfo = {};
    },
    [GET_USER_INFO](state, data) {
      state.userInfo = data;
    }
  },
  actions: {
    [LOGIN]({commit}, data) {
      return login(data.username, data.password)
      .then((res) => {
        if (res.success) {
          commit(LOGIN, res.data);
        }
        return res;
      });
    },
    [LOGOUT]({commit, state}) {
      return logout().then(res => {
        commit(LOGOUT);
        return res;
      });
    },
    [GET_USER_INFO]({commit}) {
      return getUserInfo().then(res => {
        if (res.success) {
          commit(GET_USER_INFO, res.data);
        }
        return res;
      });
    }
  }
};

export default user;
