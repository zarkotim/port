
// all the middleare goes here
var middlewareObj = {};


middlewareObj.isLoggedIn = function(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}else{
		res.redirect("/admin/login");
	}
}

module.exports = middlewareObj ;