var dns = require('dns');
// var domain = 'www.google.com';
var domain = 'localhost';
dns.resolve(domain, 'A', function (e, r) {
    if (e) {
        console.log(e);
    } else {
        console.log(r);
    }
})