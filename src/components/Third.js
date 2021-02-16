import React from 'react'
import { Link } from 'react-router-dom'

function Third() {
  return (
    <div className='AppBackground'>

      <h1 className='center'> How do you want to feel? </h1>
      <input type='range'></input>
      <input type='range'></input>
      <input type='range'></input>
      <input type='range'></input>
      <input type='range'></input>

      <Link to='/Second'><button type='submit' className='next'> Back </button></Link> 
      <Link to='/Results'><button className='next'> Next </button></Link> 
    </div>
  )
}

export default Third


// singenuity contact max@singenuity.com