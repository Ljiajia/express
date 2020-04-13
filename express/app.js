var url = require("url");
var path = require("path");
var querystring = require("querystring");
var fs = require("fs");
var http = require("http");
var server = http.createServer(function(req, res) {
    // var obj = url.parse(req.url, true);
    // console.log(obj.pathname)
    // console.log(obj.query)
    var address = "http://localhost:8888/api/path?user=zs&age=18";
    // var obj = url.parse(req.url, true).query;
    // console.log(obj)

    var aa = "user=zs&age=18"; //序列化字符串
    // var bb = {
    //         "name": "zs",
    //         "age": "18"
    //     }
    //     // var obj2 = querystring.parse(aa);
    // var obj3 = querystring.stringify(bb);
    // console.log(obj3)

    // var str = '{ "name": "zs", "age": "20" }';
    // // var aa = JSON.parse(str);
    // var esc = querystring.escape(aa)
    // console.log(querystring.unescape(esc))

    var aa = url.parse(address, true);
    console.log(aa.href)
    console.log(url.format(aa))
    res.end("aa")
})
server.listen(8090)