import React from 'react'
import Scrollbars from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';

export default function Playlist(props) {
  
  let {playlistData} = props;

  let list;
  list = playlistData.map(track => (

         <div className="playlist-item"
           key={track.title}
           >
             <div id='track-cover'>
               <img src={track.cover} /> 
            </div>
            <div id='track-details'>
               <span id="track-title">{track.title.length > 50 ? track.title.substr(0, 50) : track.title}</span><br />
               <span id="track-artist">{track.artist.toString().substr(0, 45)}</span>
              </div>
         </div>
        
  ))


  return (
          <div id='playlist-container'>
            <Scrollbars 
            autoHeight
            autoHeightMin={100}
            autoHeightMax={450}
            style={{ width: 325, margin: 5, 
            fontSize: 18}}>
              <div>
                {list}
              </div>
            </Scrollbars>
          </div>
  )
}
