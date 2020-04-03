<template>
<v-row justify = "center">
  <v-col cols = "6">
    <v-card class = "pa-5" elevation-12>
      <v-card-title class = "justify-center headline" >Please enter your credentials</v-card-title>

      <v-text-field type = 'text' v-model='email' label="E-Mail">

      </v-text-field>
      <v-text-field type = 'password' v-model='password' label="Password">

      </v-text-field>
      <v-row justify = "center">
        <v-btn large class = "mt-2" color="light-green" @click="login"> 
          Login
        </v-btn>
      </v-row>
    </v-card>
  </v-col>
</v-row>
</template>

<script>
import API from '../services/AuthenticationService';

export default {
  name: 'LoginTab',
  data(){
    return{
      email: '',
      password: ''
    };
  },
  methods: {
    async login(){

      let response = await API.login({
        password: this.password, email: this.email
        });
      
      console.log(response);

    }
  }
}
</script>

<style>

</style>