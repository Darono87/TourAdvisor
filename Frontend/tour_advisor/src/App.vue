<template>
  <v-app id="app">
    <navbar/>
    <main color="grey lighten-1">
      <router-view v-bind:map-ready="this.googleLoaded"/>
    </main>
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

export default {
  name: 'App',
  data(){
    return{
      googleLoaded: false
    }
  },
  mounted() {
    let callbackName = "googleLoaded";
    let googleMaps = document.createElement('script')
    googleMaps.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${config.googleKey}&callback=${callbackName}`);
    googleMaps.innerHTML = "google.maps.Map(document.getElementById('map'), {zoom: 4, center: {lat:0,long:0}});";
    document.head.appendChild(googleMaps);

    window[callbackName] = ()=>{
      this.googleLoaded = true;
    }
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
main{
  max-width: 800px;
  margin: auto;
  margin-top: 100px;
}
</style>
