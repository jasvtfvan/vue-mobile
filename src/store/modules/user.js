import { login, logout, getUserInfo } from '@/apis/modules/user';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { LOGIN, LOGOUT, GET_USER_INFO } from '@/constants/apiTypes';

const user = {
  state: {
    token: getToken(),
    userInfo: {}
  },
  mutations: {
    [LOGIN](state, data) {
      state.token = data;
      setToken(data);
    },
    [LOGOUT](state, data) {
      state.token = null;
      state.userInfo = {};
      removeToken();
    },
    [GET_USER_INFO](state, data) {
      state.userInfo = data;
    }
  },
  actions: {
    [LOGIN]({commit}, data) {
      return login(data).then((res) => {
        if (res.success) {
          commit(LOGIN, res.data);
        }
      });
    },
    [LOGOUT]({commit, state}) {
      return logout(state.token).then(res => {
        commit(LOGOUT);
      });
    },
    [GET_USER_INFO]({commit}) {
      return getUserInfo().then(res => {
        if (res.success) {
          commit(GET_USER_INFO, res.data);
        }
      });
    }
  }
};

export default user;
