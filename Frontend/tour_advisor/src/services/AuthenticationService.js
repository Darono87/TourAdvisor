import API from "./API"

export default {

  register(data){
    return API().post("register",data);
  }

};