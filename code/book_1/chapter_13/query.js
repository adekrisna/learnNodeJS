var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    database: 'mysql',
    user: 'root',
    password: 'root'
})

connection.connect(function (err) {
    if (err) {
        console.log('与 MySQL 数据库连接失败。')
    } else {
        console.log('与 MySQL 数据库连接成功。')
        connection.query('INSERT INTO lctest SET ?', {
            username: '张',
            firstname: '三'
        }, function (err, result) {
            if (err) {
                console.log('插入数据失败。')
                connection.end();
            } else {
                connection.query('SELECT * FROM ??', ['lctest'], function (err, result) {
                    if (err) {
                        console.log('查询数据失败。')
                    } else {
                        console.log(result.insertId);
                        connection.end();
                    }
                })
            }
        })

    }
})