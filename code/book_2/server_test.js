var http = require('http');
var assert = require('assert');

var opts = {
    host: 'localhost',
    port: 8000,
    path: '/send',
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    }
}

var req = http.request(opts, function (res) {
    res.setEncoding('utf8');

    var data = '';
    res.on('data', function (d) {
        data += d;
    })

    res.on('end', function () {
        var resp = {
            status: 'ok',
            message: 'Tweet received'
        }
        assert.deepEqual(JSON.parse(data), resp);
    })

})

req.write('tweet=test');
req.end();