import React, { useContext, useEffect, useState } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Icon from '../images/Exclude.png';
import Arrow from '../images/arrow.png';


const GenrePicker = () => {
const [selected, setSelected] = useState();
const [myColor, setMyColor] = useState('#6e6e6e48');


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



    return (
        <div className='component-container'>
          
          <h1 className='center'> What genre of music do you like? </h1>

          <br></br>
          <br></br>

          <form action='/Sliders' className='center '>
          <Scrollbars style={{ width: 300, height: 170, margin: 'auto' }}>
            <ul style={{padding: 0}} className='track-horizontal'>
              {list}
            </ul>
          </Scrollbars>

          <br></br>
          <br></br>
          
          <Link to='/Journal'><button type='submit' className='next'> Back </button></Link> 
          <Link to='/Sliders'><button type='submit' className='next'> next </button></Link>
          <Link to='/Journal'><button className='next'> Something else... </button></Link>
          </form>
        </div>
        
      )
    }    

  

export default GenrePicker
