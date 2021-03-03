import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Journal from './Journal';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import store from '../store';
import { SET_USER } from '../actions/types';
import setAuthToken from '../utils/setAuthToken';

class Callback extends Component {
  constructor(){
    super()
    this.state = {
      signedIn: false,
    }
  }

  componentDidMount(){
    console.log('hash = ' + window.location.hash)
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

    let bearerToken = 'Bearer ' +  _token

    if(_token) { 
      localStorage.setItem('auth_token', bearerToken); 
      setAuthToken(bearerToken);
  }
  
  if(localStorage.getItem('auth_token')){
    axios
        .get('https://api.spotify.com/v1/me',
        // {headers: {
        //   'Authorization': 'Bearer: ' + {_token}
        // }}
        )
        .then((res) => 
       store.dispatch({
          type: SET_USER,
          payload: res.data.id
        }))

     .catch(err => console.log(err))
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.auth.user !== null){
      this.props.history.push('/journal')
    } 
  
  }

  render(){



  return (
    <div>
      Loading...
    </div>
  )
  }
}

Callback.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {})(Callback);
