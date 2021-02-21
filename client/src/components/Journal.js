import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Icon from '../images/Exclude.png';
import Arrow from '../images/arrow.png';

class Journal extends Component {
  ComponentDidMount = () => {
    
  }

  
  render () {
    console.log(window.location.hash);

    

  
  const onSubmit = () => {
  console.log('onSubmit')
  }
  
    return (
    <div className='component-container'>
      


      <h1 className='center'> How are you feeling today? </h1>

      <br></br>
      <br></br>

      <form className='center' onSubmit={(e) => {onSubmit(e)}}>
      <div className='journal-outer-container'> 
        <textarea type='text' 
          id='textInput' 
          placeholder='Type something here...' 
          name="textBody">
        </textarea>
       
      </div> 
      <br></br> 
        <Link to='/GenrePicker'><button type='submit' className='next'> Next </button></Link>
      </form>

    </div>
  )                     
  
  }
}
export default Journal
