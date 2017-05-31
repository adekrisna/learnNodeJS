var mongo = require('mongodb');
var config = require('./config.js');

// console.log(mongo.Connection);
// console.log(mongo.Connection.DEFAULT_PORT);

var server = new mongo.Server(config.host, config.port, config.serverOptions);

module.exports = server;
