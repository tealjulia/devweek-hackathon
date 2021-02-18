import React from 'react'
import { Link } from 'react-router-dom'

function Results() {
  return (
    <div className='AppBackground'>
      <h2> This is your mood </h2>
      <br></br>
      <h1> *mood* </h1>
      <br></br>
      <div className='gridContainer'>
        <button className='next'> Save entry </button>
        <button className='next'> Fave playlist </button>
        <button className='next'> New entry </button>
        
        <Link to='/Sliders'><button className='next'> Not how I'm feeling </button></Link>

      </div>
    </div>
  )
}

export default Results
