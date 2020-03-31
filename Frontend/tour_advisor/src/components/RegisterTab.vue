<template>
<v-row class = "sign-up-row" justify = "center">
  <v-card class="sign-up-card" elevation-12>
    
    <v-card-title class = "headline">Sign up</v-card-title>
    <v-card-subtitle class = "subtitle">Follow the steps below to start the journey ...</v-card-subtitle>

    <v-text-field type = 'text' v-model='email' label="E-Mail">

    </v-text-field>
    <v-text-field type = 'password' v-model='password' label="Password">

    </v-text-field>
    <v-row justify = "center">
      <v-btn large color="light-green" class="sign-up-button" @click='register'> 
        Sign up
      </v-btn>
    </v-row>

    <div>{{serverText}}</div>

  </v-card>
</v-row>
</template>

<script>

import AS from '../services/AuthenticationService'

export default {
  name: 'ReigsterTab',
  data(){
    return{
      email: '',
      password: '',
      serverText: ''
    };
  },
  methods:{
    async register(){
      try{
        let message = await AS.register({
          email: this.email,
          password: this.password
        });
        this.serverText = message.data.message;
      }catch(e){
        switch(e.response.data.err){
          case 'MAIL1':
            this.serverText = 'There is already a user with this email address';
            break;
          case 'VAL1':
            this.serverText = 'Wrong email or empty password provided';
            break;
          default:
            this.serverText = 'Unkown error occured';
            break;
        }
          
      }
    }
  }
}
</script>

<style scoped>
.sign-up.row{
  margin-top: 16px;
}
.sign-up-card{
  padding: 16px;
}
.sign-up-button{
  margin-bottom: 8px;
}

</style>
