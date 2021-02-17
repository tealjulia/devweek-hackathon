import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


function SignIn() {

  return (
    <div className='AppBackground'>
      <h2 className='center'> Spotify log in </h2>
      <input type='text' placeholder='Email' className='SI-google'></input>
      <input type='password' placeholder='Password' className='SI-google'></input>
      
      <Link to='/First'><button type='submit' className='next'> Next </button></Link> 
    </div>
  )
}

export default SignIn
