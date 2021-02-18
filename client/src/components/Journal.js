import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';



class Journal extends Component {
  ComponentDidMount = () => {
    
  }

  
  render () {
    console.log(window.location.hash);
    const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function(initial, item) {
      if (item) {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial
    }, {} )
  console.log('access token = ' + hash.access_token)

    let _token = hash.access_token;
    if (_token) {
      this.setState({
        token: _token
      })
    }
    

  // const [textBody, setTextBody] = useState();
  // const [emotions, setEmotions] = useState(null);

  
  const onSubmit = () => {
  //   e.preventDefault();
    
  //   const newState = {
  //     // user: user.user,
  //     // textBody: textBody
  //   }

  //   console.log('user is ' + newState.user);
  //   //submit entry to database
  //   axios
  //     .post('/api/entries/', newState)
  //   //set emotion state
  //     .then((res) => {
  //       // setEmotions(res.data.emotions);
  //     })
  //   //redirect to next page
  //   .then(() => {
  //     window.location.href='/GenrePicker';
  //   })
  //   .catch((err) => console.log(err))
  console.log('onSubmit')
  }
  
    return (
    <div className='AppBackground'>
      <h1 className='center'> How are you feeling today? </h1>
      <form onSubmit={(e) => {onSubmit(e)}}>
      <textarea type='text' 
        id='textInput' 
        placeholder='Type something here...' 
        name="textBody"
        // onChange={e => setTextBody(e.target.value)}
        // value={textBody}
        >
      </textarea>

        <Link to='/Journal'><button type='submit' className='next'> Back</button></Link> 
          <Link to='/GenrePicker'><button type='submit' className='next'> Next </button></Link>
      </form>

    </div>
  )                     
  
  }
}
export default Journal
