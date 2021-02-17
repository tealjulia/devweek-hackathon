import React, { useContext, useEffect, useState } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { MusicContext } from '../context/Contexts';

const GenrePicker = () => {
  // const [musicContext, setMusicContext] = useContext(MusicContext);
  const [selected, setSelected] = useState();
  const [myColor, setMyColor] = useState('red');
  const {state, dispatch} = useContext(MusicContext);

  const [genres, setGenres] = useState([
    { genre: 'Country' },
    { genre: 'R&B' },
    { genre: 'EDM' },
    { genre: 'Pop' },
    { genre: 'Orchestral' },
    { genre: 'Rap' },
    { genre: 'Hip hop' },
    { genre: 'Metal' },
    { genre: 'Latin American' },
    { genre: 'Jazz' },
    { genre: 'Classic rock' }
  ]);

  let selectedGenres = {};

  //selecting genres
  const onSelectGenre = (e) => {
    console.log(e.target.id);
    if(!selectedGenres[e.target.id]){
      selectedGenres[e.target.id] = true;
      e.target.style.backgroundColor=myColor;
    } else {
      e.target.style.backgroundColor='transparent';
      delete selectedGenres[e.target.id];
    }

    console.log(selectedGenres);

  }

  //build list
  let list;
   list = genres.map(item => (
          <div className="genre-wrapper"
            key={item.genre}
            >
            <li value={item.genre} 
               name={item.genre}
               id={item.genre}
               onClick={onSelectGenre}
               className='genre'
            >{item.genre}</li>
          </div>
         
   ))

  //submit
  const onSubmit = () => {
    let tempMusicContext = MusicContext;
    tempMusicContext.genres = selectedGenres;
    dispatch({ type: 'UPDATE_MUSIC_OBJ', data: tempMusicContext})
  }

    return (
        <div className='AppBackground'>
          
          <h1 className='center'> What genre of music do you like? </h1>
          <form onSubmit={onSubmit} action='/Sliders'>
          <Scrollbars style={{ width: 300, height: 170, margin: 10 }}>
            <ul>
              {list}
            </ul>
          </Scrollbars>

          <Link to='/Journal'><button className='next'> Back </button></Link>
          
            <button 
              type='submit' 
              className='next'
            > next </button>
          </form>
        </div>
        
      )
    }    

  

export default GenrePicker
