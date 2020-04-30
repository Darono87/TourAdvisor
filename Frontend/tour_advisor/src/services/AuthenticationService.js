import API from "./API"

export default {

  register(data){
    return API().post("register",data);
  },
  login(data){
    return API().post("login",data);
  },
  logout(token){
    return API().post("logout",null,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

};