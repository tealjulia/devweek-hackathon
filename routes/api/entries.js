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
  const { errors, isValid } = validateEntryInput(req.body);

    //check validation
    if (!isValid) {
      //if errors, send in json with 400 error
      return res.status(400).json(errors);
    }
    //perform emotional analysis
    pd.emotion(req.body.text,"en")
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
          user: req.user.spotifyId,
          emotion: emotion,
          text: req.body.text
        });
        newEntry.save().then((entry) => res.json(entry))
      })
      .catch((error) => {
        console.log(error);
      })
    
  }
)

//@route   GET  /api/entries/playlist
//@desc    Generate Spotify playlist
//@access  Private? Public?
router.get('/playlist', (req, res) => {
  const trackParams = req.query;
  spotifyApi.setAccessToken(req.headers.authorization);
  console.log('token = ' + spotifyApi.getAccessToken());

  spotifyApi.getRecommendations(req.query)
.then(function(data) {
  let recommendations = data.body;
  console.log(recommendations);
}, function(err) {
  console.log("Something went wrong!", err);
});


  console.log(trackParams);


}

)


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