<template>
  <section>
    <h3>Map Container</h3>
    <div id = "map">
      
    </div>
  </section>
  
</template>

<script>
import config from "../config"

export default {
  name: 'MapContainer',
  mounted() {

    let callbackName = "googleLoaded";
    let googleMaps = document.createElement('script')
    googleMaps.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${config.googleKey}&callback=${callbackName}`);
    googleMaps.innerHTML = "google.maps.Map(document.getElementById('map'), {zoom: 4, center: {lat:0,long:0}});";
    document.head.appendChild(googleMaps);

    window[callbackName] = ()=>{
      if(!google)
        console.log("error");
      const map = new google.maps.Map(document.querySelector("#map"),{
          center: {lat: 0, lng: 0},
          zoom: 3
        });
    }
    

  }, 
  methods: {
    showMap(){
      console.log("test");
    }
  }
}
</script>

<style scoped>
#map{
  width: 800px;
  height: 400px;
  margin-bottom: 100px;
}
</style>
