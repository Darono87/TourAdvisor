<template>
  <v-row tag="section" justify="center">
    <v-card>
      <v-card-title class = "headline" justify="center">Map Container</v-card-title>
      <div id = "map">
      </div>
    </v-card>
  </v-row>
  
</template>

<script>
import API from "../services/MapService";

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
    async createMap(){
      
      this.map = new google.maps.Map(document.querySelector("#map"),{
        center: {lat: 50.122658, lng: 18.987061},
        zoom: 7
      });

      console.log(await API.loadPointsOnArea(50,20,51,22));
      // let marker = new google.maps.Marker({
      //   position:{
      //     lat: 50.122658,
      //     lng: 18.987061
      //   },
      //   map: this.map,
      //   label: "test label",
      //   opacity: 0.6
      // })

      // let marker2 = new google.maps.Marker({
      //   position:{
      //     lat: 50.222658,
      //     lng: 18.987061
      //   },
      //   map: this.map,
      //   title: "test title",
      //   icon: "hotel.svg"
      // })

      // let iconed = {
      //   url: "dep.svg",
      //   scaledSize: new google.maps.Size(25,25)
      // };

      // let marker3 = new google.maps.Marker({
      //   position:{
      //     lat: 50.122658,
      //     lng: 19.007061
      //   },
      //   map: this.map,
      //   icon: iconed
      // })

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
