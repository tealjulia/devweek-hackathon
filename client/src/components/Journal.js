import React from 'react'
import { Link } from 'react-router-dom'

function First() {
  return (
    <div className='AppBackground'>
      <h1 className='center'> How are you feeling today? </h1>
      <textarea type='text' id='textInput' placeholder='Type something here...'></textarea>

      <Link to='/SignIn'><button type='submit' className='next'> Back </button></Link> 
      <Link to='/Second'><button type='submit' className='next'> Next </button></Link> 

    </div>
  )
}

export default First
