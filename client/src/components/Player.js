import React from 'react';
import { Link } from 'react-router-dom';

import Play from '../images/Play.png';
import Back from '../images/back.png';
import Next from '../images/next.png';
import Favorite from '../images/heart.png';
import Playlist from './Playlist'

function Player(props) {

  const {nowPlaying} = props;
  console.log(nowPlaying);

  let artist = nowPlaying.artist.toString().split(',').join(', ')

  return (
    // background
    <div id ='player-container'>
      <div id='player-header'>
        <p> Today you're feeling </p>
          <br></br>
          <br></br>
        <h1 id='current-mood'> *mood* </h1>
          <br></br>
          <br></br>
          <br></br>
        <p> Here's a playlist attuned to your mood </p>
      </div>
        <div id='player' className='center'>
          <img src={nowPlaying.cover} />
          <h3> {nowPlaying.title} </h3>
          <p> {artist} </p>
        </div>

        <br></br>
        <br></br>

        <div className='center' id='controls'>
          <img src={Back} id='back-btn'/>     
          <img src={Play} id='play-btn'/>
          <img src={Next} id='next-btn'/>
        </div>

          <div id='time-container'>
            <div id='time-start'> 00:00 </div>
            <div id='time-bar'></div>
            <div id='time-end'> 00:00 </div>
          </div>


        </div>

  )
}

export default Player
