var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	email: String,
	password: String,
	profilePicture: String,
	isDeleted: Boolean,
	createdBy: String
});
mongoose.model('User', UserSchema);