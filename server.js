const express = require('express');
const app = express();
const passport = require('passport');
require('./config/passport')
const cookieSession = require('cookie-session');
const isLoggedIn = require('./middleware/auth');
const entries = require('./routes/api/entries');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

//spotify authentication initialized
app.use(cookieSession({
  name: 'spotify-auth-session',  
  keys: ['key1', 'key2']
}))
//Body parser configuration
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//passport initializing
app.use(passport.initialize());
app.use(passport.session());

//mongoose configged & initialized
const db = require('./config/keys').mongoURI;
const { clientSecret } = require('./config/keys_dev');

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDb Connected'))
  .catch((err) => console.log(err));




//Landing route, checks if logged in
app.get('/', isLoggedIn, (req,res)=>{
  res.send(req.headers)
})

//logout
app.get('/logout', (req, res) => {
  req.session = null;
  req.logout(); 
  res.redirect('/');
})

app.get('/auth/error', (req, res) => res.send('Unknown Error'))

//log in via spotify
app.get('/auth/spotify',passport.authenticate('spotify', 
  { scope: ['user-read-private', 'user-read-email', 'playlist-read-private', 'playlist-read-collaborative', 'playlist-modify-private', 'playlist-modify-public'] }), 
  (req, res) => {
  // this function does not execute, is redirected to Spotify
});

app.get('/auth/spotify/callback',passport.authenticate('spotify', { failureRedirect: '/auth/error' }),
function(req, res) {
  console.log(req.user);
  res.redirect('/');
});

//entries routes
app.use('/api/entries', entries)

app.listen(8000,()=>{
    console.log('Serve is up and running at the port 8000')
})