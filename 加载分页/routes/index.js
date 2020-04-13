var express = require('express');
var getCollection = require("../unlt/getCollection.js");
var mymongo1610 = require("mymongo1610");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    getCollection("user", function(err, con, collection) {
        if (err) {
            return res.send({
                code: 0,
                msg: "error"
            })
        }
        collection.find().limit(3).toArray(function(err, result) {
            if (err) {
                return res.send({
                    code: 1,
                    msg: "error"
                })
            }
            res.render('index', { data: result });
        })
    })
});
router.get("/add", function(req, res) {
    console.log(req.query)
    getCollection("user", function(err, con, collection) {
        if (err) {
            return res.send({
                code: 0,
                msg: "error"
            })
        }
        collection.find().skip(req.query.page * 1).limit(req.query.limit * 1).toArray(function(err, result) {
            if (err) {
                return res.send({
                    code: 1,
                    msg: "error"
                })
            }
            if (result.length > 0) {
                res.json({ code: 2, data: result });

            } else {
                res.json({ code: 3, data: "数据加载完成" });

            }

        })
        con.close()
    })
})
















router.post("/data", function(req, res) {
    getCollection("user", function(err, con, collection) {
        if (err) {
            return res.send({
                code: 0,
                msg: "error"
            })
        }
        collection.find().skip(req.body.len * 1).limit(req.body.limit * 1).toArray(function(err, result) {
            if (err) {
                return res.send({
                    code: 1,
                    msg: "error"
                })
            }
            if (result.length > 0) {
                res.json({ code: 2, data: result });

            } else {
                res.json({ code: 3, data: "数据加载完成" });

            }

        })
        con.close()
    })
})
module.exports = router;