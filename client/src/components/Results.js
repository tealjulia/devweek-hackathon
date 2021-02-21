import React from 'react';
import Playlist from './Playlist';
import Player from './Player';
import { Link } from 'react-router-dom';

export default function Results() {

  const playlistData = [
    {
      title: 'Changing - Majestic Remix',
      artist: [ 'Sigma', 'Paloma Faith', 'Majestic' ],
      cover: 'https://i.scdn.co/image/ab67616d00004851193afbc617854df8da0e5124'
    },
    {
      title: 'Shine',
      artist: [ 'Years & Years' ],
      cover: 'https://i.scdn.co/image/ab67616d00004851b84e077bb3f2e36adbdeb6d4'
    },
    {
      title: 'Whiskey Lullaby (feat. Alison Krauss)',
      artist: [ 'Brad Paisley', 'Alison Krauss' ],
      cover: 'https://i.scdn.co/image/ab67616d000048517302ccf08d789304c55ee73e'
    },
    {
      title: "It's Ok If You Forget Me",
      artist: [ 'Astrid S' ],
      cover: 'https://i.scdn.co/image/ab67616d000048516d7ef0f772d6506524ade7fd'
    },
    {
      title: 'Sax',
      artist: [ 'Fleur East' ],
      cover: 'https://i.scdn.co/image/ab67616d0000485140ab5a3c8e7e7c8f12cca2bb'
    },
    {
      title: 'Parachute',
      artist: [ 'Chris Stapleton' ],
      cover: 'https://i.scdn.co/image/ab67616d00004851540fc1d083eac5bcff8dad21'
    },
    {
      title: 'Happiness',
      artist: [ 'Sam Sparro' ],
      cover: 'https://i.scdn.co/image/ab67616d00004851240f2991f6b521b94aad9fb4'
    },
    {
      title: 'Who I Am',
      artist: [ 'Jessica Andrews' ],
      cover: 'https://i.scdn.co/image/ab67616d00004851f8a703cc1a793ae7e77b5e85'
    },
    {
      title: 'Baby This and Baby That',
      artist: [ 'Jon Wolfe' ],
      cover: 'https://i.scdn.co/image/ab67616d00004851b0e1bcff7d67c36d0b893edb'
    },
    {
      title: 'Erupting Light',
      artist: [ 'Hildur Guðnadóttir', 'Jóhann Jóhannsson' ],
      cover: 'https://i.scdn.co/image/ab67616d0000485141c99cac5cae2fab2e567f4c'
    },
    {
      title: 'Stay High - Habits Remix',
      artist: [ 'Tove Lo', 'Hippie Sabotage' ],
      cover: 'https://i.scdn.co/image/ab67616d0000485170cd79659edf4d5fec0840b8'
    },
    {
      title: 'Do I Make You Wanna',
      artist: [ 'Billy Currington' ],
      cover: 'https://i.scdn.co/image/ab67616d00004851ebae92a723fd5b67c21eb15a'
    },
    {
      title: 'Concerto for Orchestra, BB 123: I. Introduzione: Andante non troppo - Allegro vivace',
      artist: [ 'Béla Bartók', 'Baltimore Symphony Orchestra', 'Marin Alsop' ],
      cover: 'https://i.scdn.co/image/ab67616d0000485197766a30a45c565f8efa8e78'
    },
    {
      title: 'Bang Bang Bang',
      artist: [ 'Mark Ronson', 'The Business Intl' ],
      cover: 'https://i.scdn.co/image/ab67616d000048514e1ce5c19325a80d8300cb64'
    },
    {
      title: 'Shoot Out the Lights',
      artist: [ 'Jessie James Decker' ],
      cover: 'https://i.scdn.co/image/ab67616d000048513366ba742ca0d856a5b596a7'
    }
  ]




  return (
    <div id="results-container">
      <div id='player-container'>
        <Player nowPlaying={playlistData[0]}/>
        <Link to='/Journal'><button type='submit' className='next'> Back to Journal </button></Link> 
      </div>
      <div id='playlist-container'>
        <Playlist playlistData={playlistData}/>
      </div>


    </div>
  )
}
