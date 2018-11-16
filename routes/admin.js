var express = require("express");
var router = express.Router();
var Admin = require("../models/admin");
var Contact = require("../models/contact");


router.get("/register", (req, res)=>{
	res.render("admin/admincreate")
})
// display registreation of admin
router.get("/register", (req, res)=>{
	res.render("admin/admincreate")
})

// displays user panel interface
router.get("/", function(req, res){
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


// handles creation of admin
router.post("/register", (req, res)=>{
	console.log(req.body.admin)
	Admin.create(req.body.admin, (err, blog)=>{
		if(err){res.redirect("back")}
		else{
			
			res.redirect("/admin")
		}
	})
} )

module.exports = router;