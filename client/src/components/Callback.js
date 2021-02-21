import React, { Component } from 'react';
import Journal from './Journal';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Callback extends Component {

  componentDidMount(){
      const hash = window.location.hash
      .substring(1)
      .split('&')
      .reduce(function(initial, item) {
        if (item) {
          var parts = item.split('=');
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
      return initial
      }, {})
      console.log('access token = ' + hash.access_token)

    let _token = hash.access_token;

    

    if(_token) { 
      localStorage.setItem('auth_token', _token); 
    }

  }
    

  render(){

  let callbackContent;
  
  if (!localStorage.auth_token || localStorage.auth_token == null){
    callbackContent = (
      <div>Loading...</div>
    )
  } else { 
    callbackContent = (
      <Redirect to='/Journal' />
    )
  }


  return (
    <div>
      {callbackContent}
    </div>
  )
  }
}

export default Callback;
