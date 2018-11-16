var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
res.render("indexpage/index.ejs")
})

module.exports = router;