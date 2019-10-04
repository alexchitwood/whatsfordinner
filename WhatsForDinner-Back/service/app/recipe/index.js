var mongoose = require('mongoose'),
	Recipe = mongoose.model("Recipe"),
	ObjectId = mongoose.Types.ObjectId

exports.create = function(req, res, next) {
	var recipeModel = new Recipe(req.body);
	recipeModel.save(function(err, recipe) {
		if(err) {
			res.status(500);
			res.json({
				type: false,
				data: "Error occured: " + err
			})
		}
		else {
			res.json({
				type: true,
				data: recipe
			})
		}
	})
}

exports.get = function(req, res, next) {
	Recipe.findById(new ObjectId(req.params.id), function(err, recipe) {
		if(err) {
			res.status(500);
			res.json({
				type: false,
				data: "Error occured: " + err
			})
		}
		else {
			if(recipe) {
				res.json({
					type: true,
					data: recipe
				})
			}
			else {
				res.json({
					type: false,
					data: "Recipe: " + req.params.id + " not found"
				})
			}
		}
	})
}

exports.update = function(req, res, next) {
	var updatedRecipeModel = new Recipe(req.body);
	Recipe.findByIdAndUpdate(new ObjectId(req.params.id), updatedRecipeModel, function(err, recipe) {
		if(err) {
			res.status(500);
			res.json({
				type: false,
				data: "Error occured: " + err
			})
		}
		else {
			if(recipe) {
				res.json({
					type: true,
					data: recipe
				})
			}
			else {
				res.json({
					type: false,
					data: "Recipe: " + req.params.id + " not found"
				})
			}
		}
	})
}

exports.delete = function(req, res, next) {
	Recipe.findByIdAndRemove(new Object(req.params.id), function(err, recipe) {
		if(err) {
			res.status(500);
			res.json({
				type: false,
				data: "Error occured: " + err
			})
		}
		else {
			res.json({
				type: true,
				data: "Recipe: " + req.params.id + " deleted successfully"
			})
		}
	})
}