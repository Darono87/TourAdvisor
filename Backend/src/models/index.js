const DB = require('./connection');

let models = {};
const userModel = require("./user")(DB);
models[userModel.name] = userModel;
models['DB'] = DB;

module.exports = models;