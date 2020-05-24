import API from "./API"

export default {

  loadPointsOnArea(latStart, lngStart, latEnd, lngEnd) {
    return API().get("places/area", {
      params: {
        latStart,
        lngStart,
        latEnd,
        lngEnd
      }
    });
  }

};