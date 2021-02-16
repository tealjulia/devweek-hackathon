const express = require('express');
const querystring = require('querystring');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const router = express.Router();
const keys = require('../../config/keys');

router.get('/login', (req, res) => {
    res.redirect(`https://accounts.spotify.com/authorize?${querystring.stringify({
        response_type: 'code',
        client_id: keys.SPOTIFY_CLIENT_ID,
        redirect_uri: keys.SPOTIFY_REDIRECT_URI,
        scope: 'playlist-modify-public playlist-modify-private user-read-email user-read-private',
        show_dialog: true
    })}`);
});

router.get('/callback', async (req, res) => {
  const {code} = req.query;
  const clientId = keys.SPOTIFY_CLIENT_ID;
  const secret = keys.SPOTIFY_CLIENT_SECRET;
  const redirect_uri = keys.SPOTIFY_REDIRECT_URI;
  const grant_type = 'authorization_code';

  const basicHeader = Buffer.from(`${clientId}:${secret}`).toString('base64');
  const {data} = await axios.post('https://accounts.spotify.com/api/token', querystring.stringify({
      grant_type,
      code,
      redirect_uri,
  }), {
      headers: {
          Authorization: `Basic ${basicHeader}`,
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  });

  const sessionJWTObject = {
      token: data.access_token,
  };

  req.session.jwt = jwt.sign(sessionJWTObject, keys.JWT_SECRET_KEY)
  return res.redirect('http://localhost:3000/#/First');
});

router.get('/current-session', (req, res) => {
  jwt.verify(req.session.jwt, keys.JWT_SECRET_KEY, (err, decodedToken) => {
      if (decodedToken) {
          res.send(decodedToken);
      } else {
          res.send(false);
      }
  });
})

router.get('/logout', (req, res) => {
  req.session = null;
  res.redirect(
      `http://localhost:3000/`
  );
});

module.exports = router;