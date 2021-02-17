import React from 'react';

export const UserContext = React.createContext({
  auth: null, 
  user: null, 
})

export const MusicContext = React.createContext({
  tempo: null,
  energy: null,
  valence: null,
  genres: []
})

export const PlaylistContext = React.createContext({
  songs: null
})