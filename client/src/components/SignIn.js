import React, { Component } from 'react'
import { Link } from 'react-router-dom'





class SignIn extends Component {
  
  render(){

    return (
      <div className='AppBackground'>
        <button>Log In To Spotify!</button>
        <Link to='/Journal'><button type='submit' className='next'> Next </button></Link> 
      </div>
    )
  }
}

export default SignIn
