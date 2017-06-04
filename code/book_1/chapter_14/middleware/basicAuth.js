var basicAuth = require('basic-auth');
var pool = require('../utils/mysql.js');
var auth = function () {
    return function (req, res, next) {
        var user = basicAuth(req);
        function unAuthorized(msg) {
            res.set('WWW-Authenticate', 'Basic realm="Input User&Password"')
            return res.sendStatus(401).send(msg);
        }
        pool.getConnection(function (err, connection) {
            function end(success, msg) {
                connection.release();
                if (!success) {
                    res.send(msg);
                }
            }
            if (err) {
                end(false, '数据库连接失败！');
            } else {
                connection.query('SELECT count(1) count FROM test where username=? and firstname=?', [user.name, user.pass], function (err, result) {
                    if (err) {
                        end(false, '数据库查询失败');
                    } else {
                        if (result[0].count > 0) {
                            end(true);
                            res.msg = '成功';
                            next();
                        } else {
                            unAuthorized('账号或密码不正确');
                        }
                    }
                })
            }
        })
    }

}

module.exports = auth;