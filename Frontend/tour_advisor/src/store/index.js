import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: localStorage.getItem('userToken') || null
  },
  mutations: {
    login (state, tokenProvided){
      state.userToken = tokenProvided;
      localStorage.setItem('userToken',tokenProvided);
    }
  },
  actions: {
  },
  modules: {
  }
})
