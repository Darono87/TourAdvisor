const DB = require('./connection');

let models = {};
const userModel = require("./user").UserInit(DB);
models[userModel.name] = userModel;
const tokenModel = require('./token')(DB);
models[tokenModel.name] = tokenModel;
const placeModel = require('./place').PlaceInit(DB);
models[placeModel.name] = placeModel;
models['DB'] = DB;

module.exports = models;