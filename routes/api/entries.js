const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Entry = require('../../models/Entry');
const validateEntryInput = require('../../validation/entry');
const keys = require('../../config/keys');
const router = express.Router();
const pd = require('paralleldots');
const axios = require('axios');

//@route  GET   /api/entries
//@desc   Get past entries by user id
//@access Private
router.get(
  '/',
  (req, res) => {
    Entry.find({ user: req.user.spotifyId })
      .then((entry) => {
        if (!entry) res.status(404).json({ noEntires: 'No entries exist' });

        res.json(entry);
      })
      .catch((err) =>
        res.status(404).json({ noentryfound: 'No entries found' })
      );
  }
);

//@route   POST /api/entries
//@desc    Save new entry
//@access  Private
router.post('/',
  (req, res) => {
    const { errors, isValid } = validateEntryInput(req.body);

    //check validation
    if (!isValid) {
      //if errors, send in json with 400 error
      return res.status(400).json(errors);
    }
    const newEntry = new Entry({
      user: req.user.spotifyId,
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
router.get('/recs', 
  passport.authenticate('spotify', { failureRedirect: '/auth/spotify', session: false}),
  (req, res) => {

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
  })

module.exports = router;