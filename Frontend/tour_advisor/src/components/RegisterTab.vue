<template>
 <div>
   <h2>Follow the steps below to start the journey ...</h2>
   <input type = "text" v-model="email" name = "email" id = "register-email" placeholder="email">
   <br>
   <input type = "password" v-model="password" name = "password" id = "register-password" placeholder="password">
   <br>
   <input @click="register" type = "submit" id="register-submit" value="Register">
   <div>{{serverText}}</div>
 </div>
</template>

<script>

import AS from "../services/AuthenticationService"

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
      let message = await AS.register({
        email: this.email,
        password: this.password
      });
      this.serverText = message.data.message;
    }
  }
}
</script>

<style scoped>
input{
  margin-top: 10px;
  margin-bottom: 10px;
}
form{
  text-align: center;
}
</style>
