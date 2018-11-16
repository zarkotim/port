var mongoose = require("mongoose");
var Comment = require("./comment.js");


var blogPostSchema = mongoose.Schema({
	title: String,
	content: String,
	author: String,
	comments:[
        {
         type: mongoose.Schema.Types.ObjectId,

         ref: "Comment"
      }
        ]


})

module.exports = mongoose.model("Blog", blogPostSchema);