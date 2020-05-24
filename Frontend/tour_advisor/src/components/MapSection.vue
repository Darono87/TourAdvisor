<template>
  <v-row tag="section" justify="center">
    <v-col cols="8">
      <v-card>
        <v-card-title class = "headline">Map Container</v-card-title>
        <map-component>
        </map-component>
      </v-card>
    </v-col>
    <v-col cols="4">
      <organiser>
      </organiser>
    </v-col>
  </v-row>
</template>

<script>
import MapComponent from "./Map.vue";
import Organiser from "./Organiser.vue";

export default {
  name: 'MapSection',
  components: {
    MapComponent,
    Organiser
  }
}
</script>

<style>

</style>