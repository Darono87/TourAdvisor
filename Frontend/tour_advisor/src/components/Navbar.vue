<template>
  <v-app-bar app class="nav-main" color="light-green darken-1">
    <router-link to = "/">
      <v-toolbar-title class="nav-main-title headline">
        <span class = "brown--text text--darken-1">Tour</span><span class = "green--text text--darken-2">Advisor</span>
      </v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class = "align-center">
      <router-link to = "/map">
        <v-btn class="nav-main-button"  color="light-green"> 
          Map
        </v-btn>
      </router-link>
      <router-link v-if = "!$store.state.userToken" to = "/register">
        <v-btn class="nav-main-button"  color="light-green"> 
          Sign up
        </v-btn>
      </router-link>
      <router-link v-if = "!$store.state.userToken"  to = "/login">
        <v-btn class="nav-main-button" tile color="light-green lighten-2"> 
          Login
        </v-btn>
      </router-link>
      <div class = "mx-4" v-if = "$store.state.userToken">
        <v-btn  class=" mr-4 nav-main-button" @click="logout" color="light-green"> 
          Logout
        </v-btn>
        <span class = "subtitle-1">Hello {{ $store.state.nickname }}!</span>
      </div>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>

import API from '../services/AuthenticationService';

export default {
  name: 'Navbar',
  methods: {
    async logout(){
      try{
        let result = await API.logout(this.$store.state.userToken);
        
        //logout was successful

        this.$store.commit('logout');

      } catch(e){
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>
.router-link-active{
  outline: none;
  text-decoration: none;
}
.nav-main-button{
  margin:4px;
}
</style>