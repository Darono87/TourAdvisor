const DB = require('./connection');

let models = {};
const userModel = require("./user").UserInit(DB);
models[userModel.name] = userModel;
const tokenModel = require('./token')(DB);
models[tokenModel.name] = tokenModel;
models['DB'] = DB;

module.exports = models;