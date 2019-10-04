require('./app/ingredient/ingredient.js');
require('./app/recipe/recipe.js');
require('./app/user/user.js');

var restful = require('node-restful'),
  mongoose = restful.mongoose,
  restify = require('restify');


//Connect to mongo
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/whats_for_dinner_db');
//Local only
//mongoose.connect('mongodb://user:password@uaf135145.ddns.uark.edu:22/whats_for_dinner_db');



//............  Create A server
var server = restify.createServer({
  name: "WhatsForDinner",
  version: "1.0.0"
});
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.fullResponse());



//............  Authentication
server.use(restify.plugins.authorizationParser());
server.use(function(req, res, next) {
  var users;

  // temp if needed
  // users = {
  //   foo: {
  //     id: 1,
  //     password: 'bar'
  //   }
  // };

  // Ensure that user is not anonymous; and
  // That user exists; and
  // That user password matches the record in the database.
  // if (req.username == 'anonymous' || !users[req.username] || req.authorization.basic.password !== users[req.username].password) {
  //   // Respond with { code: 'NotAuthorized', message: '' }
  //   next(new restify.NotAuthorizedError());
  // } else {
  //   next();
  // }

  next();
});
server.use(restify.plugins.fullResponse());


//............  Setup Controllers
var controllers = {};
controllers['ingredient'] = require('./app/ingredient/index.js');
controllers['recipe'] = require('./app/recipe/index.js');
controllers['user'] = require('./app/user/index.js');
controllers['app'] = require('./app/index.js');



//............  Endpoints
server.get('/ingredient/:id', controllers.ingredient.getByID)
server.get('/ingredient/getByName/:name', controllers.ingredient.getByName)
server.put('/ingredient/:id', controllers.ingredient.update)
server.post('/ingredient', controllers.ingredient.create)

server.get('/recipe/:id', controllers.recipe.get)
server.put('/recipe/:id', controllers.recipe.update)
server.post('/recipe', controllers.recipe.create)

server.get('/user/:id', controllers.user.get)
server.get('/user/login/:name', controllers.user.login)
server.put('/user/:id', controllers.user.update)
server.post('/user', controllers.user.create)

server.get('/app/search/:searchText', controllers.app.search)





//............  Server Endpoint
server.get('/', function(req, res) {
  res.json({
    helloWorld: 'Hello World!',
    serverInfo: "You are talking to the WhatsForDiner web service"
  });
})




//............  Server Start
server.listen(3001, function() {
  console.log('App listening on port 3001!')
})



//............  Error Handling
server.use((err, request, response, next) => {
  console.log(err)
  response.status(500).send('Something broke!')
})
//This function should be the last called with app.use
//To use, 'throw new Error('oops')'