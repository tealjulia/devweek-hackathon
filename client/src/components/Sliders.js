import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../images/Exclude.png';
import Arrow from '../images/arrow.png'


function Sliders() {
  return (
    <div className='component-container'>

      <h1 className='center'> How do you want to feel? </h1>
      <br></br>
      <br></br>

      <label for='tempo'> Tempo </label>
      <input type='range' min='0.0' max='1.0' id='tempo'></input>

      <label for='valence'> Valence </label>
      <input type='range' min='0.0' max='1.0' id='valence'></input>

      <label for='energy'> Energy </label>
      <input type='range' min='0.0' max='1.0' id='energy'></input>
      <br></br>
      <br></br>

      <Link to='/GenrePicker'><button type='submit' className='next'> Back </button></Link> 
      <Link to='/Results'><button className='next'> Next </button></Link> 
    </div>
  )
}

export default Sliders
