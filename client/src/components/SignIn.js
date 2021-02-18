import React from 'react';
import { Link } from 'react-router-dom';
import Spotify_logo from '../images/Spotify_Logo.png';
import Logo from '../images/logo.png';
import axios from 'axios';


function SignIn() {

  return (
    <div className='AppBackground'>

      <div>
        <img src={Logo}/>
      </div>

        <br></br>
        <br></br>
        <br></br>

      <div>
        <h1> Log in with spotify </h1>
      </div>
        <br></br>
        <br></br>

      {/* <input type='text' placeholder='Email' className='SI-google'></input>
      <input type='password' placeholder='Password' className='SI-google'></input> */}

      <div className='spotify-outer-container'>
        {/* <Link to='/Journal'> */}
          <a type='submit'>
            <img src={Spotify_logo} className='center ' id='spotify'/>
          </a>
        {/* </Link> */}
      </div> 
    </div>
  )
}

export default SignIn
