var express = require("express");
var arr = require("./data/data.json");
var app = express();
app.get("/jj", function(req, res, next) { //注册路由 响应页面
    res.end(require("fs").readFileSync(require("path").join(__dirname, "page", "index.html")))
})
app.post("/index", function(req, res, next) {
    var str = "";
    req.on("data", function(chunk) {
        str += chunk;
    })
    req.on("end", function() {
        var obj = require("querystring").parse(str);
        req.content = obj;
        next();
    })
}, function(req, res, next) {
    var flag = arr.some(function(item) {
        return req.content.name === item.name;
    })
    if (flag) {
        res.json({ code: 1, msg: "该用户已注册,请重新注册" })
    } else {
        next()
    }
}, function(req, res) {
    arr.push(req.content);
    require("fs").writeFileSync("./data/data.json", JSON.stringify(arr))
    res.json({ code: 2, msg: "注册成功" })
    res.end()
})
app.get("/login", function(req, res, next) { //注册路由 响应页面
    res.end(require("fs").readFileSync(require("path").join(__dirname, "page", "login.html")))
  
})
app.listen(8090)