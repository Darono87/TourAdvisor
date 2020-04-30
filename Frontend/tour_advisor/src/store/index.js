import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: localStorage.getItem('userToken') || null,
    nickname: localStorage.getItem('userNickname') || null
  },
  mutations: {
    login (state, loginData){
      state.userToken = loginData.token;
      localStorage.setItem('userToken',loginData.token);
      state.nickname = loginData.nickname;
      localStorage.setItem('userNickname',loginData.nickname);
    },
    logout (state){
      state.userToken = null;
      localStorage.removeItem('userToken');
      state.nickname = null;
      localStorage.removeItem('userNickname');
    }
  },
  actions: {
  },
  modules: {
  }
})
