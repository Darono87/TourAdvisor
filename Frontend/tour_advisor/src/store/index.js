import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function determineLoggedState(){
  let timePassed = Date.now() - localStorage.getItem('tokenTime');
  var returnObject = null;
  if(timePassed >= 86400000){
    returnObject = {
      userToken: null,
      nickname: null
    }
  }
  else
    returnObject = {
      userToken: localStorage.getItem('userToken') || null,
      nickname: localStorage.getItem('userNickname') || null
    };
  return returnObject;
}

export default new Vuex.Store({
  state: {
    ...determineLoggedState()
  },
  mutations: {
    login (state, loginData){
      
      state.userToken = loginData.token;
      localStorage.setItem('userToken',loginData.token);
      state.nickname = loginData.nickname;
      localStorage.setItem('userNickname',loginData.nickname);
      localStorage.setItem('tokenTime',Date.now());
    },
    logout (state){
      state.userToken = null;
      localStorage.removeItem('userToken');
      state.nickname = null;
      localStorage.removeItem('userNickname');
      localStorage.removeItem('tokenTime');
    }
  },
  actions: {
  },
  modules: {
  }
})
