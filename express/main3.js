var express = require("express");
var app = express();

app.route("/jj")
    .get(function(req, res, next) {
        console.log(req.query)
        res.end("get")
    })
    .post(function(req, res) {
        var str = "";
        req.on("data", function(chunk) {
            str += chunk;
        })
        req.on("end", function() {
            console.log(require("querystring").parse(str))
            res.end("post")
        })
    })
app.listen(8888)