<template>
  <v-app id="app">
    <navbar/>
    <v-content class="grey lighten-5">

      <v-container fluid>
        <router-view v-bind:map-ready="this.googleLoaded"></router-view>
      </v-container>

    </v-content>
    <v-footer app>
      Made by Vith
    </v-footer>
  </v-app>
</template>

<script>
import RegisterTab from './components/RegisterTab.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
import MainMap from './components/MainMap.vue'
import Navbar from './components/Navbar.vue'
import LoginTab from './components/LoginTab.vue'
import Welcome from './components/Welcome.vue'

Vue.use(VueRouter);


const routes = [
  { path: '/register', component: RegisterTab },
  { path: '/map', component: MainMap},
  { path: '/login', component: LoginTab},
  { path: '/', component: Welcome}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

import config from "./config"

const callbackName = "googleLoaded";
const googlePromise = new Promise((resolve,reject)=>{
  window[callbackName] = resolve;
});

export default {
  name: 'App',
  data(){
    return{
      googleLoaded: googlePromise
    }
  },
  mounted() {

    let googleMaps = document.createElement('script');
    googleMaps.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${config.googleKey}&callback=${callbackName}`);
    document.head.appendChild(googleMaps);

  },
  components: {
    Navbar
  },
  router
}

</script>

<style>
.v-content{
  align-items: center;
}

</style>
