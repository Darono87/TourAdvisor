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
      <router-link to = "/register">
        <v-btn class="nav-main-button"  color="light-green"> 
          Sign up
        </v-btn>
      </router-link>
      <router-link to = "/login">
        <v-btn class="nav-main-button" tile color="light-green lighten-2"> 
          Login
        </v-btn>
      </router-link>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar'
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