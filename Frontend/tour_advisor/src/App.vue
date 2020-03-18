<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
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

export default {
  name: 'App',
  components: {
    Navbar
  },
  router
}

</script>

<style>
#app {
  
}
</style>
