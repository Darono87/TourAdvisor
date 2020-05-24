import API from "./API"

export default {

  async loadPointsFromArea(latStart, lngStart, latEnd, lngEnd) {
    
    let points = await API().get("places/area", {
      params: {
        latStart,
        lngStart,
        latEnd,
        lngEnd
      }
    });
    return points.data.map((actual)=>{
      return {lat: actual.latitude, lng: actual.longitude};
    });

  }

};