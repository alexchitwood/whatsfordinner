const passport = require('passport')  
const LocalStrategy = require('passport-local').Strategy

const user = {  
  username: 'test-user',
  password: 'test-password',
  id: 1
}

passport.use(new LocalStrategy(  
  function(username, password, done) {
      //Find user should do a lookup to the mongoDB, but for now
      // we will just use the in memory user
    findUser(username, function (err, user) {
      if (err) {
        return done(err)
      }
      if (!user) {
        return done(null, false)
      }
      if (password !== user.password  ) {
        return done(null, false)
      }
      return done(null, user)
    })
  }
))