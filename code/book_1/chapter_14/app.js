var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var querystring = require('querystring');
// var uploadFile = require('./utils/upload.js');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/static', express.static(path.join(__dirname, 'public')));

app.post('/send', function (req, res) {
    res.send('success')
});

app.get('/', function (req, res) {
    res.send('success');
})

app.listen(9000, '127.0.0.1', function () {
    console.log('success 123');
})
