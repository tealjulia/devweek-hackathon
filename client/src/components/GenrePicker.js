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
        <div className='AppBackground'>
      <img src={Icon} className='icon' />

        <div className='login-top'>
          <a href="/api/auth/login">
            <p id='login' className='center'> Login </p> 
          </a>  
        </div>
        <div id='personIcon' className='center'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="60" height="60"
              viewBox="0 0 152 172">
            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3EC1D3"><path d="M80.625,10.75c-38.50683,0 -69.875,31.36817 -69.875,69.875c0,38.50683 31.36817,69.875 69.875,69.875c38.50683,0 69.875,-31.36817 69.875,-69.875c0,-38.50683 -31.36817,-69.875 -69.875,-69.875zM80.625,21.5c32.71192,0 59.125,26.41308 59.125,59.125c0,14.40332 -5.12304,27.54688 -13.60547,37.79297c-4.61914,-13.10156 -14.61328,-23.6416 -27.37891,-28.84864c5.33301,-4.91308 8.73438,-11.92578 8.73438,-19.69433c0,-14.78125 -12.09375,-26.875 -26.875,-26.875c-14.78125,0 -26.875,12.09375 -26.875,26.875c0,7.76855 3.40136,14.78125 8.73438,19.69433c-12.76562,5.20703 -22.71777,15.74707 -27.33692,28.84864c-8.52441,-10.24609 -13.64746,-23.38965 -13.64746,-37.79297c0,-32.71192 26.41308,-59.125 59.125,-59.125zM80.625,53.75c8.98633,0 16.125,7.13868 16.125,16.125c0,8.98633 -7.13867,16.125 -16.125,16.125c-8.98632,0 -16.125,-7.13867 -16.125,-16.125c0,-8.98632 7.13868,-16.125 16.125,-16.125zM80.625,96.75c18.2666,0 33.25781,12.97558 36.74317,30.19239c-10.12011,8.02051 -22.84375,12.80761 -36.74317,12.80761c-13.89942,0 -26.62304,-4.7871 -36.70117,-12.80761c3.44335,-17.2168 18.43456,-30.19239 36.70117,-30.19239z"></path></g></g></svg>
        
        </div>
        <img src={Arrow} id='arrow' />
          
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
