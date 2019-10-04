var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
	name: String,
	isPrivate: Boolean,
	isDeleted: Boolean,
	createdBy: String
});
mongoose.model('Recipe', RecipeSchema);