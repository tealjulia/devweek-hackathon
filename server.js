const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./config/passport')
const isLoggedIn = require('./middleware/auth');
const entries = require('./routes/api/entries');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');


//authentication initialized
app.use(cookieSession({
  name: 'spotify-auth-session',  
  keys: ['key1', 'key2']
}))
app.use(passport.initialize());
app.use(passport.session());

//mongoose configged & initialized
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDb Connected'))
  .catch((err) => console.log(err));

//Body parser configuration
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//already logged in?
app.get('/', isLoggedIn, (req,res)=>{
  user = req.user;
  res.send(req.user)
})

//logout
app.get('/logout', (req, res) => {
  req.session = null;
  req.logout(); 
  res.redirect('/');
})

app.get('/auth/error', (req, res) => res.send('Unknown Error'))

app.get('/auth/spotify',passport.authenticate('spotify', { scope: ['user-read-private'] }), (req, res) => {
  console.log()
});

app.get('/auth/spotify/callback',passport.authenticate('spotify', { failureRedirect: '/auth/error' }),
function(req, res) {
  res.redirect('/');
});

//entries routes
app.use('/api/entries', entries)

app.listen(8000,()=>{
    console.log('Serve is up and running at the port 8000')
})