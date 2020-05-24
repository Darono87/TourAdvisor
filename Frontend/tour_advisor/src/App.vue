<template>
  <v-app id="app">
    <navbar/>
    <v-content class="grey lighten-5">

      <v-container fluid>
        <router-view></router-view>
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
import MainMap from './components/MapSection.vue'
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


export default {
  name: 'App',
  mounted() {

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
