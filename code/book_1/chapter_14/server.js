var express = require('express');
var http = require('http');
var setHeader = require('./middleware/setHeader.js');
var auth = require('./middleware/basicAuth.js');
// var nodeBasicAuth = require('node-basicauth');

var app = express();
// app.use('/static', setHeader);
app.use(auth());
// app.use(nodeBasicAuth({
//     wang: '123'
// }))

app.get('/auth', function (req, res) {
    res.status(200).send('Authorization' + res.msg);
})

app.listen(9000, '127.0.0.1', function () {
    console.log('success')
})