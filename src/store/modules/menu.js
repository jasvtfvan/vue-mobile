import { SWITCH_MENU } from '@/constants/publicTypes';

const menu = {
  state: {
    index: 0
  },
  mutations: {
    [SWITCH_MENU](state, data){
      state.index = data;
    }
  }
}

export default menu;
