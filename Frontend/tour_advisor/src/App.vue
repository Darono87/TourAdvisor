<template>
  <v-app id="app">
    <navbar/>
    <v-container class = "app-content" color="grey lighten-1">
      <v-row no-gutters justify="center">
        <v-col cols="6">
          <router-view v-bind:map-ready="this.googleLoaded"/>
        </v-col>
      </v-row>
      
    </v-container>
  </v-app>
</template>

<script>
import RegisterTab from './components/RegisterTab.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
import MainMap from './components/MainMap.vue'
import Navbar from './components/Navbar.vue'

Vue.use(VueRouter);


const routes = [
  { path: '/register', component: RegisterTab },
  { path: '/map', component: MainMap}
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
#app {
  font-family: 'Montserrat', sans-serif;
}
.app-content{
  margin-top: 100px;
}
</style>
