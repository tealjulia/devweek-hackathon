const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Entry = require('../../models/Entry');
const validateEntryInput = require('../../validation/entry');
const keys = require('../../config/keys');
const router = express.Router();
const pd = require('paralleldots');
pd.apiKey = keys.parallelDotsKey;
const axios = require('axios');
const { emotion } = require('paralleldots');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const spotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new spotifyWebApi({
  clientId: keys.clientID,
  clientSecret: keys.clientSecret,
  redirectUri: keys.callbackURL
})


//check if logged in
router.get('/current-session', (req, res) => {
  jwt.verify(req.session.jwt, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
      if (err || !decodedToken) {
          res.send(false);
      } else {
          res.send(decodedToken);
      }
  });
})

router.get('/logout', (req, res) => {
  req.session = null;
  res.redirect(
      `/`
  );
});

//@route   POST /api/entries
//@desc    Add emotional analysis & Save
//@access  Private
router.post('/', (req, res) => {
  const entry = req.body.textBody;
  const user = req.body.user;
  const { errors, isValid } = validateEntryInput(req.body.textBody);
  
    //check validation
    if (!isValid) {
      //if errors, send in json with 400 error
      return res.status(400).json(errors);
    }
    //perform emotional analysis
    pd.emotion(entry,"en")
      .then((response) => {
        response = JSON.parse(response);
        const emotions = response.emotion;
        console.log(emotions);
        //extract top two emotions
        let firstEmotion = _.maxBy(_.keys(emotions), o => emotions[o]);
        let secondEmotion = _.maxBy(_.keys(_.omit(emotions, firstEmotion)), o => emotions[o]);

        let emotion = [firstEmotion, secondEmotion]
        //create entry & save
        const newEntry = new Entry({
          user: user,
          emotion: emotion,
          text: entry
        });
        newEntry.save().then(
          (entry) => res.send(entry)
          )
      })
      .catch((error) => {
        console.log(error);
      })
    
  }
)

//@route   GET  /api/entries/playlist
//@desc    Generate Spotify playlist
//@access  Private? Public?
// router.get('/playlist', (req, res) => {
//   const trackParams = req.query;
//   spotifyApi.setAccessToken(req.headers.authorization);
//   console.log('token = ' + spotifyApi.getAccessToken());

//   spotifyApi.getRecommendations(req.query)
// .then(function(data) {
//   let recommendations = data.body;
//   console.log(recommendations);
// }, function(err) {
//   console.log("Something went wrong!", err);
// });


//   console.log(trackParams);


// }

// )

//@route   GET /api/entries/last
//@desc   get user's most recent entry
//@access  Private
router.get('/last', 
  (req, res) => {
  Entry.findOne({ user: req.user.id }, {}, { sort: { 'date': -1 } })
    .then((entry) => res.json(entry))
    .catch((err) => console.log(err));
  })

//@route  GET /api/entries/all
//@desc   Get all user's previous entries
//@access   Private
router.get('/all', 
  (req, res) => {
  Entry.find({ user: req.user.id }, {}, { sort: { 'date': -1 } })
    .then((entry) => res.json(entry))
    .catch((err) => console.log(err));
  })

//@route  GET /api/entry/:id
//@desc   Get entry by id
//@access Private
router.get("/:id", (req, res) => {

  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) =>
      res.status(404).json({ nopostfound: "No post found with that ID" })
    );
});

//@route   POST /api/entries/:id/delete
//@desc    delete entry
//@access  Private
router.post('/:id/delete', 
  (req, res) => {
    Entry.findOne({ _id: req.params.id})
      .then((entry) => {
        entry.remove().then(() => res.json({ success: true }))
      })
      .catch(err => console.log(err))
  })




module.exports = router;