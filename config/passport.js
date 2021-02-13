const passport = require('passport');
const keys = require('./keys');
const SpotifyStrategy = require('passport-spotify').Strategy;
const opts = {};

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(
  new SpotifyStrategy({
    clientID: keys.clientID,
    clientSecret: keys.clientSecret,
    callbackURL: keys.callbackURL
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));