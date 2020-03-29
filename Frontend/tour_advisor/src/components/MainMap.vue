<template>
  <v-row tag="section" justify="center">
    <v-card>
      <v-card-title justify="center">Map Container</v-card-title>
      <div id = "map">
      </div>
    </v-card>
  </v-row>
  
</template>

<script>

export default {
  name: 'MapContainer',
  data(){
    return {
      map: null
    };
  },
  props: {
    mapReady: Promise
  },
  methods: {
    createMap(){
      
      this.map = new google.maps.Map(document.querySelector("#map"),{
        center: {lat: 0, lng: 0},
        zoom: 3
      });

    }
  },
  mounted() {
    this.mapReady.then(()=>{
      this.createMap();
    });
  }
}
</script>

<style scoped>
#map{
  width: 800px;
  height: 400px;
}
</style>
