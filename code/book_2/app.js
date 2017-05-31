var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World\n');
})
// server.on('request', function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World\n');
// })
server.listen(8124, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8124');