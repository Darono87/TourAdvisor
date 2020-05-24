<template>
  <v-row tag="section" justify="center">
    <v-card>
      <v-card-title class = "headline" justify="center">Map Container</v-card-title>
      <map-component>
      </map-component>
    </v-card>
  </v-row>
</template>

<script>
import MapComponent from "./Map.vue";

export default {
  name: 'MapSection',
  components: {
    MapComponent
  }
}
</script>

<style>

</style>