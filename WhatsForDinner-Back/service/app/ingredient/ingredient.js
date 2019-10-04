var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
	name: String,
	isDeleted: Boolean,
	createdBy: String
});
mongoose.model('Ingredient', IngredientSchema);