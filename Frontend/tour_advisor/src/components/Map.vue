<template>
  <section id = "map">
  </section>
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
  methods: {
    async loadToMapFrom(latStart,lngStart,latEnd,lngEnd){

      let points = await API.loadPointsFromArea(latStart,lngStart,latEnd,lngEnd);
      points.map((element)=>{
        return new google.maps.Marker({
          position:{
            lat: element.lat,
            lng: element.lng
          },
          map: this.map
        })
      });

    },
    async createMap(){
      
      this.map = new google.maps.Map(document.querySelector("#map"),{
        center: {lat: 50.122658, lng: 18.987061},
        zoom: 7
      });

      await this.loadToMapFrom(50,20,55,23);

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
    this.$store.state.googleLoaded.then(()=>{
      this.createMap();
    });
  }
}
</script>

<style scoped>
#map{
  height: 450px;
}
</style>
