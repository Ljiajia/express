var express = require('express');
var mymongo1610 = require("mymongo1610");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    mymongo1610.find("aa", function(err, result) { //查找全部
        if (err) {
            res.json({
                code: 0,
                msg: "error"
            })
        } else {
            res.render("index", {
                data: result
            })
        }
    })
});
router.get("/remove", function(req, res) { //删除
    mymongo1610.delete("aa", req.query, function(err) {
        if (err) {
            res.json({
                code: 0,
                msg: "error"
            })
        } else {
            res.json({
                code: 2,
                msg: "删除成功"
            })
        }
    })
})

router.post("/setdetails", function(req, res) { //更改内容
    mymongo1610.update("aa", { _id: req.body["_id"] }, { name: req.body["name"], pasd: req.body["pasd"], }, function(err) {
        if (err) {
            res.json({
                code: 0,
                msg: "error"
            })
        } else {
            res.json({
                code: 3,
                msg: "更改成功"
            })
        }
    })
})
router.post("/adddetails", function(req, res) { //新增内容
    mymongo1610.insert("aa", req.body, function(err) {
        if (err) {
            res.json({
                code: 0,
                msg: "error"
            })
        } else {
            res.json({
                code: 3,
                msg: "新增成功"
            })
        }
    })
})
router.get("/search", function(req, res) {
    mymongo1610.find("aa", function(err, result) { //查找
        if (err) {
            res.json({
                code: 0,
                msg: "error"
            })
        }
        var namelist = result.filter(function(item) {
            return item.name.includes(req.query.name)
        })
        if (namelist.length !== 0) {
            res.json({
                code: 5,
                data: namelist
            })
        } else {
            res.json({
                code: 6,
                data: "查无此人"
            })
        }
    })
})

module.exports = router;