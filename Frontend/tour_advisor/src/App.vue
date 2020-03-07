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
  color: #2c3e50;
  max-width:800px;
  margin: auto;
  margin-top: 60px;
}
</style>
