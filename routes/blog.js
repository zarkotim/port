var express = require("express");
var router = express.Router();
var Blog = require("../models/blogpost.js");
var fs = require('fs');

// show all the blogs
router.get("/", (req, res)=>{
	Blog.find({}, (err, blog)=>{
		if(err){res.redirect("back")}else{
			res.render("blog/blogs", {blog: blog})
		}
	})
})

// more info about blog
router.get("/:id",(req, res)=>{
	Blog.findById(req.params.id).populate("comments").exec(function (err, blog){
		if(err){console.log(err)}
			else{
				console.log(blog.comments, "ovo su komentari bloga")
				res.render("blog/"+blog.title, {blog: blog})
			}
	})
})


// creates new blog
router.post("/", (req, res)=>{
	
	fs.appendFile("views/blog/"+req.body.blog.title+".ejs" , req.body.blog.content, (err)=>{
		if(err)throw err;
		console.log("File created :)")
	})
	console.log(req.body.blog)
	Blog.create(req.body.blog, (err, blog)=>{
		if(err){res.redirect("back")}
		else{
		
			
			res.redirect("/blog")
		}
	})
} )







module.exports = router;