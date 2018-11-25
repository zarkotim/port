var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    text: String,
    author: String,
    date: String,
    reply: [
    {
    	type: mongoose.Schema.Types.ObjectId,
    	ref: "Reply"
    }
    ]
    
   
});

module.exports = mongoose.model("Comment", commentSchema);