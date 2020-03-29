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
  height: 400px;
}
</style>
