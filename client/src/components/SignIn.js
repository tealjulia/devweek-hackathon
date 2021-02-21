import React, { Component } from 'react'
import Spotify_logo from '../images/Spotify_Logo.png';
import Logo from '../images/logo.png';


class SignIn extends Component {


  render () {

    const spotifyLoginURI = this.props.spotifyLoginURI;

  return (
    <div className="component-container">

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
        
      <div className='spotify-outer-container'>
          <a href={spotifyLoginURI}>
            <img src={Spotify_logo} className='center ' id='spotify'/>
          </a>
      </div> 

    </div>
    )
  }
}

export default SignIn;