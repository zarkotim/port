const express = require("express");
const mongoose    = require("mongoose");
var path    = require("path");
var router = express.Router();
var bodyParser  = require("body-parser");
var Admin = require("./models/admin.js")
var quoteGenerator = require("./quotegenerator/main.js");



var app = express();

// connection to database
mongoose.connect("mongodb://localhost/portfolio_db");
app.use(bodyParser.urlencoded({extended: true}));
// default view engine
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

// add current user to a template
app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

// routes
var indexRoutes = require("./routes/index.js");
var aboutRoutes = require("./routes/aboutme.js");
var myWorkRoutes = require("./routes/mywork.js");
var blogRoutes = require("./routes/blog.js");
var contactRoutes = require("./routes/contact.js");
var adminRoutes = require("./routes/admin.js");
var commentRoutes = require("./routes/comments.js");
var Blog = require("./models/blogpost.js");
var Comment = require("./models/comment.js");

app.use("", indexRoutes);
app.use("/about", aboutRoutes);
app.use("/mywork", myWorkRoutes);
app.use("/blog", blogRoutes);
app.use("/contact", contactRoutes);
app.use("/admin", adminRoutes);
app.use("/blog/:id/comment/", commentRoutes);




//creates a new comment on a post
 app.post("/blog/:id/comment/new", (req, res) => {
  console.log("reached")
   console.log(req.params)
   Blog.findById(req.params.id, function(err, blog){
       if (err) {
         console.log("ovo je errror" + err)
         }
        
         else {
             console.log(blog + "ovo je blog")

             Comment.create(req.body.comment, (err, comment) => {
                
                
                 if (err) { console.log(" ovaj error") }
                 else {


                     comment.save()
                    blog.comments.push(comment)

                     blog.save();
                     console.log(comment.text)
                     res.redirect("/blog/" + blog._id)
                 }
             })
         }
    })
})







app.listen(3000, process.env.IP, function(){
   console.log("Server Has Started!");
});