var db = require('./utils/db.js');

var find_selector = {
    username: '赵钱孙'
}

db.open(function (err, db) {
    db.collection('users', function (err, collection) {
        if (err) {
            throw err;
        } else {
            var cursor = collection.find(find_selector);
            cursor.toArray(function (err, docs) {
                if (err) {
                    throw err;
                } else {
                    console.log(docs);
                    db.close();
                }
            })
        }
    })
})