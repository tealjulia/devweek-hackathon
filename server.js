const express = require('express');
const passport = require('passport');
require('./config/passport')
const session = require('cookie-session');
const isLoggedIn = require('./middleware/auth');
const entries = require('./routes/api/entries');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const spotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new spotifyWebApi();
const keys = require('./config/keys');
const auth = require('./routes/api/auth');
const helmet = require('helmet');
const hpp = require('hpp');

const app = express();
app.use(helmet());
app.use(hpp());
app.use(
  session({
      name: 'session',
      secret: keys.COOKIE_SECRET,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  })
);


//Body parser configuration
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//passport initializing
app.use(passport.initialize());
app.use(passport.session());

//mongoose configged & initialized
const db = require('./config/keys').mongoURI;
const { clientSecret } = require('./config/keys_dev');
const SpotifyWebApi = require('spotify-web-api-node');

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDb Connected'))
  .catch((err) => console.log(err));

//use routes
app.use('/api/entries', entries);
app.use('/api/auth', auth);
app.listen(8000,()=>{
    console.log('Serve is up and running at the port 8000')
})

module.exports = app;