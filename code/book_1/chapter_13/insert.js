var datas = require('./utils/data.js');
var db = require('./utils/db.js');

db.open(function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log('成功数据库连接');

        db.collection('users', function (err, collection) {
            if (err) {
                console.log('访问 users 集合失败');
            } else {
                collection.insert(datas.one, function (err, docs) {
                    console.log(docs);
                    db.close(true);
                })
            }
        })

    }
})

db.once('close', function (err) {
    if (err) {
        throw err
    } else {
        db.open(function (err, db) {
            db.collection('users', function (err, collection) {
                collection.insert(datas.two, function (err, docs) {
                    if (err) {
                        throw err;
                    } else {
                        console.log(docs);
                        db.close(true);
                        console.log('成功关闭数据库');
                    }
                })
            })
        })

    }
})
