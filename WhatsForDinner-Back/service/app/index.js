//const express = require('express')  
//const passport = require('passport')  
//const session = require('express-session')  
//We will use mongoDB instead of redis
//const RedisStore = require('connect-redis')(session)
var controllers = {};
controllers['ingredient'] = require('./ingredient/index.js');
controllers['recipe'] = require('./recipe/index.js');

// const app = express()  
// app.use(session({  
//   store: new RedisStore({
//     url: config.redisStore.url
//   }),
//   secret: config.redisStore.secret,
//   resave: false,
//   saveUninitialized: false
// }))
// app.use(passport.initialize())  
// app.use(passport.session())  


exports.search = function(req, res, next) {
	
	//var ingredients = controllers.ingredient.getByName(req, res, next);
  //var recipes = controllers.recipe.get(req, res, next);

  res.json({
				//ingredients: incredients,
				//recipes: recipes
        "hi" : "wassah"
			})
}