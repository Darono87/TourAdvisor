<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import RegisterTab from './components/RegisterTab.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
import MainMap from './components/MainMap.vue'


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
  router
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  max-width:800px;
  margin: auto;
  margin-top: 60px;
}
</style>
