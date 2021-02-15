// const passport = require('passport');
// const keys = require('./keys');
// const SpotifyStrategy = require('passport-spotify').Strategy;
// const opts = {};
// const findOrCreate = require('mongoose-findorcreate');
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });

// passport.use(
//   new SpotifyStrategy({
//     clientID: keys.clientID,
//     clientSecret: keys.clientSecret,
//     callbackURL: keys.callbackURL
//   },

//   function(accessToken, refreshToken, profile, done) {
//     const sessionJWTObject = {
//       token: accessToken
//     };

//     req.session.jwt = jwt.sign(sessionJWTObject, keys.JWT_SECRET_KEY)

//     User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
      
//       console.log(user);
//       return done(err, user);
//     });

//   }
// ));