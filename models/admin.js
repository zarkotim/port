var mongoose = require("mongoose");


// admin schema
var AdminSchema = new mongoose.Schema({
    username: String,
     password: String
   
   
    
    
    
    
});



module.exports = mongoose.model("Admin", AdminSchema);