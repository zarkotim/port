var mongoose = require("mongoose");


var contactSchema = mongoose.Schema({
    email: String,
    name: String,
    text: String
   
});

module.exports = mongoose.model("Contact", contactSchema);