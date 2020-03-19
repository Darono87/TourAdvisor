<template>
  <section>
    <h3>Map Container</h3>
    <div id = "map">
      
    </div>
  </section>
  
</template>

<script>

export default {
  name: 'MapContainer',
  props: {
    mapReady: Boolean
  },
  methods: {
    createMap(){
      if(this.mapReady){
        const map = new google.maps.Map(document.querySelector("#map"),{
          center: {lat: 0, lng: 0},
          zoom: 3
        });
      }
      else{
        setTimeout(this.createMap,500);
      }
    }
  },
  mounted() {
    this.createMap();
  }
}
</script>

<style scoped>
#map{
  height: 400px;
}
</style>
