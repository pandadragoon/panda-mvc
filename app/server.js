var config = require('./config/config.js').default;
var App = require('./lib/app').default;
var setupDB = require('./db/setupDB').default;
var setupExpress = require('./lib/setupExpress').default;

var db = setupDB(config.db);
var express = setupExpress();
var app = new App(express, db, config);

module.exports = app;

