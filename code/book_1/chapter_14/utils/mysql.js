var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'lctest',
    user: 'root',
    password: 'root'
})

module.exports = pool;