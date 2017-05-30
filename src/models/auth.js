import * as API from '../api/user';

export default {
  state: {
    isLogin: window.IS_LOGIN || false,
    user: window.USER || {}
  },
  reducers: {
    userDone(state, user) {
      return { ...state, isLogin: true, user };
    }
  },
  actions: {
    async login({ commit }, payload) {
      const user = await API.login(payload);
      commit('userDone', user);
    },
    async register({ commit }, payload) {
      const user = await API.register(payload);
      commit('userDone', user);
    }
  }
};