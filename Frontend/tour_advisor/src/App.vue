<template>
  <div id="app">
    <register-tab/>
  </div>
</template>

<script>
import RegisterTab from './components/RegisterTab.vue'

export default {
  name: 'App',
  components: {
    RegisterTab
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
