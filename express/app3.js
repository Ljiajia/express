var express = require("express");
var app = express();
app.get("/", function(req, res, next) {
    res.writeHead(200, {
        "content-type": "text/html;charset=utf-8"
    })
    res.end("<h1>你好</h1>")
})
app.listen(8888, function() {
    console.log("服务开启成功")
})