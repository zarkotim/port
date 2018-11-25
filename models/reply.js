var mongoose = require("mongoose");

var replyCommentSChema = new mongoose.Schema({
	text: String,
	author: String,

})


module.exports = mongoose.model("Reply", replyCommentSChema);