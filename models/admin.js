var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");


// admin schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
      username: String,
      password: String
    });

UserSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("User", UserSchema);