var fs = require('fs');
function uploadFile(req, res) {
    console.log(req)
    var file = req.files.myfile;
    fs.readFile(file.path, function (err, data) {
        if (err) {
            res.send('读文件操作失败')
        } else {
            fs.writeFile(file.name, data, function (err) {
                if (err) {
                    res.send('写文件操作失败')
                } else {
                    res.send('文件上传成功')
                }
            })
        }
    })
}

module.exports = uploadFile;
