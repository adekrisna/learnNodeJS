var setHeader = function (req, res, next) {
    res.statusCode = 200;
    res.header = {
        'Content-Type': 'text/html'
    }
    res.head = '<head><meta charset="utf-8" /></head>';
    next();
}

module.exports = setHeader;