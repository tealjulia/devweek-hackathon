const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Entry = require('../../models/Entry');
const ValidateEntryInput = require('../../validation/entry');
const keys = require('../../config/keys');
const router = express.Router();
const pd = require('paralleldots');


//@route  GET   /api/entries
//@desc   Get past entries by user id
//@access Private


//@route   POST /api/entries
//@desc    Save new entry
//@access  Private
router.post('/',
  passport.authenticate('spotify', { failureRedirect: '/auth/spotify', session: false }), 
  (req, res) => {
    const { errors, isValid } = validateEntryInput(req.body);

    //check validation
    if (!isValid) {
      //if errors, send in json with 400 error
      return res.status(400).json(errors);
    }

    const newEntry = new Entry({
      //how to access spotify id??
      text: req.body.text
    });
    newEntry.save().then((entry) => res.json(entry))
  }
)

//@post    POST /api/entries/emotion
//@desc    Emotional analysis of journal entry
//@access  Private? Public?
router.get('/emotion',
  passport.authenticate('spotify', { failureRedirect: '/auth/spotify', session: false }), 
  (req, res) => {

  }
)


//@route   GET  /api/entries/recs
//@desc    Generate Spotify playlist
//@access  Private? Public?

//@route   DELETE /api/entry/:id
//@desc    delete entry
//@access  Private

module.exports = router;