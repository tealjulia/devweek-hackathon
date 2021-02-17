import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { UserContext, MusicContext } from '../context/Contexts';


const Journal = () => {
  const [textBody, setTextBody] = useState();
  const [emotions, setEmotions] = useState(null);
  const user = useContext(UserContext);
  const music = useContext(MusicContext);
  console.log(user)
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    const newState = {
      user: user.user,
      textBody: textBody
    }

    console.log('user is ' + newState.user);
    //submit entry to database
    axios
      .post('/api/entries/', newState)
    //set emotion state
      .then((res) => {
        setEmotions(res.data.emotions);
      })
    //redirect to next page
    .then(() => {
      window.location.href='/GenrePicker';
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className='AppBackground'>
      <h1 className='center'> How are you feeling today? </h1>
      <form onSubmit={(e) => {onSubmit(e)}}>
      <textarea type='text' 
        id='textInput' 
        placeholder='Type something here...' 
        name="textBody"
        onChange={e => setTextBody(e.target.value)}
        value={textBody}>
      </textarea>

        <Link to='/Journal'><button type='submit' className='next'> Back</button></Link> 
          <button type='submit' className='next'> Next </button>
      </form>

    </div>
  )
}

export default Journal
