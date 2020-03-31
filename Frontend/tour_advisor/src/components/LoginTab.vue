<template>
<v-row justify = "center">
  <v-card elevation-12>
    <v-card-title>Login</v-card-title>

    <v-text-field type = 'text' v-model='email' label="E-Mail">

    </v-text-field>
    <v-text-field type = 'password' v-model='password' label="Password">

    </v-text-field>
    <v-row justify = "center">
      <v-btn large color="light-green"> 
        Login
      </v-btn>
    </v-row>
  </v-card>
</v-row>
</template>

<script>
export default {
  name: 'LoginTab'
}
</script>

<style>

</style>