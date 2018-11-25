var express = require("express");
var router = express.Router();
var User = require("../models/admin");
var Contact = require("../models/contact");
var passport = require("passport");
var middleware = require("../middleware/index");



// shows the registraion form
router.get("/register", (req, res)=>{
	res.render("admin/admincreate")
})

// handles creation of admin
router.post("/register", function(req, res){
  console.log(req.body.admin)

    User.register({username: req.body.username}, req.body.password, function(err, user){
        if(err){
            console.log(err)
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
        	res.redirect("/admin")
        })
                                  
    });     
})

// shows login form

router.get("/login", (req, res)=>{
	res.render("admin/adminlogin");
})

// handles admin login 

router.post("/login", passport.authenticate("local", {successRedirect: "/admin", failureRedirect:"/admin/login"}), (req, res)=>{
console.log("logged in")
});
	

// display registreation of admin
router.get("/register", (req, res)=>{
	res.render("admin/admincreate")
})

// displays admin panel interface
router.get("/", middleware.isLoggedIn, function(req, res){
	Contact.find({}, function(err, contact){


		if (err) {console.log(err)}
			else{
				res.render("admin/adminpanel", {contact:contact })
			}

	})
	
});
// shows a user contact entry

router.get("/contact/:contactid", function(req, res){
	Contact.findById(req.params.contactid, function(err, contact){
		if(err){console.log(err)}
			else{
				res.render("contact/contactshow", {contact:contact})
			}
	})
})

// posts users entries on admin panel

router.post("/", function(req, res){
	Contact.create(req.body.contact, function(err, contact){
		if (err) {throw err}
			else{
				res.redirect("/contact")
			}
	})
})




module.exports = router;