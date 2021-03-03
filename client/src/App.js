import React, { Component} from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { logoutUser } from './actions/authActions';
import { SET_USER } from './actions/types';
import Journal from './components/Journal';
import GenrePicker from './components/GenrePicker';
import Sliders from './components/Sliders';
import SignIn from './components/SignIn';
import Results from './components/Results';
import Header from './components/Header';
import Callback from './components/Callback'
import PlaylistList from './components/Playlist';
import './App.css';
import axios from 'axios';
import store from './store';



// if (localStorage.auth_token) {
//   setAuthToken(localStorage.getItem('auth_token'))
// }

class App extends Component{

  
  render(){
    const spotify = {
      client_id: 'f69d0c217d0e4640a954cf0b0f6ce05c',
      response_type: 'token',
      redirect_uri: 'http:%2F%2Flocalhost:3000%2FCallback%2F',
      state: 'attune1234',
      scope: 'playlist-modify-public%20streaming',
      show_dialog: 'true'
    }

    const spotifyLoginURI = `https://accounts.spotify.com/authorize?client_id=${spotify.client_id}&response_type=${spotify.response_type}&redirect_uri=${spotify.redirect_uri}&state=${spotify.state}&scope=${spotify.scope}&show_dialog=${spotify.show_dialog}`

    return (
      <Provider store = {store}>
      <div>
        <div className='AppBackground app-container'>
        <Header spotifyLoginURI={spotifyLoginURI}/>
          <BrowserRouter>    
                <Switch>
                  <Route path='/' exact render={() => <SignIn spotifyLoginURI={spotifyLoginURI}/>} />
                  <Route path='/sign-n' render={() => <SignIn spotifyLoginURI={spotifyLoginURI}/>} />    
                    <Route path='/callback/' component={Callback} />
                    <Route path='/journal' component={Journal}/>
                    <Route path='/genre-picker' component={GenrePicker} />
                    <Route path='/sliders' component={Sliders} />
                    <Route path='/results' component={Results}/>
                  </Switch>
            </BrowserRouter>
          </div>
        </div>
      </Provider>
            )
        }         
          
}

export default App;

