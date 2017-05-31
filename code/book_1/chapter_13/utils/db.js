var mongo = require('mongodb');
var config = require('./config.js');
var server = require('./server.js');

var db = new mongo.Db(config.dbName, server, {
    safe: true
})

module.exports = db;