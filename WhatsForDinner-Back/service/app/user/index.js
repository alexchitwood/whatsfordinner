var mongoose = require('mongoose'),
	User = mongoose.model("User"),
	ObjectId = mongoose.Types.ObjectId

exports.create = function(req, res, next) {
	var userModel = new User(req.body);
	userModel.save(function(err, user) {
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
				data: user
			})
		}
	})
}

exports.get = function(req, res, next) {
	User.findById(new ObjectId(req.params.id), function(err, user) {
		if(err) {
			res.status(500);
			res.json({
				type: false,
				data: "Error occured: " + err
			})
		}
		else {
			if(user) {
				res.json({
					type: true,
					data: user
				})
			}
			else {
				res.json({
					type: false,
					data: "User: " + req.params.id + " not found"
				})
			}
		}
	})
}

exports.update = function(req, res, next) {
	var updatedUserModel = new User(req.body);
	User.findByIdAndUpdate(new ObjectId(req.params.id), updatedUserModel, function(err, user) {
		if(err) {
			res.status(500);
			res.json({
				type: false,
				data: "Error occured: " + err
			})
		}
		else {
			if(user) {
				res.json({
					type: true,
					data: user
				})
			}
			else {
				res.json({
					type: false,
					data: "User: " + req.params.id + " not found"
				})
			}
		}
	})
}

exports.delete = function(req, res, next) {
	User.findByIdAndRemove(new Object(req.params.id), function(err, user) {
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
				data: "User: " + req.params.id + " deleted successfully"
			})
		}
	})
}

exports.login = function(req, res, next) {
	console.log(req.header('username'));
	User.find({ email: req.header('username') }, function(err, user) {
		if(err) {
			res.status(500);
			res.json({
				type: false,
				data: "Error occured: " + err
			})
		}
		else {
			if(user) {
				res.json({
					type: true,
					data: user
				})
			}
			else {
				res.status(401);
				res.json({
					type: false,
					data: "user not found"
				})
			}
		}
	})
}