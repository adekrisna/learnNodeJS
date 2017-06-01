var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    database: 'mysql',
    user: 'root',
    password: 'root'
})

// connection.connect(function (err) {
//     if (err) {
//         console.log('与 MySQL 数据库建立连接失败')
//     } else {
//         console.log('与 MySQL 数据库建立连接成功')
//         connection.end(function (err) {
//             if (err) {
//                 console.log('关闭 MySQL 数据库失败')
//             } else {
//                 console.log('关闭 MySQL 数据库成功')
//             }
//         })
//     }
// })

function handleDisconnect() {
    connection.connect(function (err) {
        if (err) {
            console.log('与 MySQL 数据库建立连接失败')
        } else {
            console.log('与 MySQL 数据库建立连接成功')
        }
    })
}

connection.on('error', function (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.log('与 MySQL 数据库之间的连接被丢失');
        setTimeout(handleDisconnect, 10000);
    }
})

handleDisconnect();
