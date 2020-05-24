import Vue from 'vue'
import Vuex from 'vuex'
import config from "../config"

Vue.use(Vuex)


function googleHandler(){

  const callbackName = "googleLoaded";
  let googleMaps = document.createElement('script');
  googleMaps.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${config.googleKey}&callback=${callbackName}`);
  document.head.appendChild(googleMaps);

  return new Promise((resolve,reject)=>{
    window[callbackName] = resolve;
  });
}

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
    ...determineLoggedState(),
    googleLoaded: googleHandler()
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
