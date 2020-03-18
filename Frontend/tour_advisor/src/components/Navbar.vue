<template>
  <v-app-bar fixed class="nav-main" color="light-green darken-1">
    <v-toolbar-title class="nav-main-title">
      <span class = "brown--text text--darken-1">Tour</span><span class = "green--text text--darken-2">Advisor</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to = "/register">
      <v-btn class="nav-main-button" outlined> 
        Register
      </v-btn>
    </router-link>
    <router-link to = "/map">
      <v-btn class="nav-main-button" outlined> 
        Map
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
 .nav-main{
    font-family: "Sen";
  }
  .nav-main-title{
    font-size: 1.5em;
  }
  .nav-main-button{
    margin:5px;
  }
</style>