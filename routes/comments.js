var express = require("express");
var router  = express.Router();
var Comment = require("../models/comment");
var Blog = require("../models/blogpost");


router.get("/new", function(req, res){
    Blog.findById(req.params.id, function(err, blog){
        console.log(blog)
    })
})




router.get("/", (req, res)=>{
	res.render("comment")
})


//router.post("/", (req, res)=>{
//	console.log(req.params)
//})





module.exports = router;