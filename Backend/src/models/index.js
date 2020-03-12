const DB = require('./connection');
const path = require('path');

let models = {};
const userModel = DB.import(path.join(__dirname,'./user'));
models[userModel.name] = userModel;
models['DB'] = DB;

module.exports = models;