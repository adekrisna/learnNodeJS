var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.listen(9000, function () {
    console.log('server running success');
});

app.get('/', function (req, res) {
    console.log(1, req.params)
    console.log(2, req.query)
    res.send('Welcome to Node Twitter');
})

var tweets = [];
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json()
app.post('/send', urlencodedParser, function (req, res) {
    console.log(1, req.body)
    if (req.body && req.body.tweet) {
        tweets.push(req.body.tweet);
        res.send({
            status: 'ok',
            message: 'Tweet received'
        })
    } else {
        res.send({
            status: 'nok',
            message: 'No tweet reveived'
        })
    }
})

app.get('/tweets', function (req, res) {
    res.send(tweets);
})

app.get('/check', function (req, res) {
    var signature = req.query.signature;
    var echostr = req.query.echostr;
    var timestamp = req.query.timestamp;
    var nonce = req.query.nonce;


})