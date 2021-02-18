import React, { useState, useEffect, createContext, useContext, useReducer } from 'react';
import { Switch, Route, HashRouter, BrowserRouter, Link } from 'react-router-dom';
import Journal from './components/Journal';
import GenrePicker from './components/GenrePicker';
import Sliders from './components/Sliders';
import SignIn from './components/SignIn';
import PlayMusic from './components/PlayMusic';
import Results from './components/Results';
import './App.css';
import axios from 'axios';
import './App.css';
import { UserContext, PlaylistContext, MusicContext } from './context/Contexts'


function App() {
  // const [auth, setAuth] = useState(null);
  // const [user, setUser] = useState(null);
  // const [musicContext, setMusicContext] = useState(null);

  // //obtain auth token
  // useEffect(() => {
  //   axios.get('/api/auth/current-session')
  //     .then(({data}) => {
  //       console.log(data.token)
  //       axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
  //       setAuth(data.token);

  //       axios.get('https://api.spotify.com/v1/me')
  //       .then((res) => {
  //         console.log(res.data)
  //         setUser(res.data.id);
  //       })
      
  //     })
  //   }, []);
  
  //   const initialMusicState = {
  //     music: {
  //       tempo: null,
  //       energy: null,
  //       valence: null,
  //       genres: []
  //     }
  //   }
    
  //   const [state, dispatch] = useReducer(musicReducer, initialMusicState);

  //   function musicReducer(state, action) {
  //     switch(action.type){
  //       case 'UPDATE_MUSIC_OBJ':
  //         return {
  //           music: action.data
  //         };
  //         default: return initialMusicState;
  //     }
  //   }
  
  // if(auth !== null) {
      return (
        <div>
        <BrowserRouter>
          {/* <div id='icn' className='center'><a href="/api/auth/login">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="42" height="42"
                viewBox="0 0 152 172">
                  <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3EC1D3"><path d="M80.625,10.75c-38.50683,0 -69.875,31.36817 -69.875,69.875c0,38.50683 31.36817,69.875 69.875,69.875c38.50683,0 69.875,-31.36817 69.875,-69.875c0,-38.50683 -31.36817,-69.875 -69.875,-69.875zM80.625,21.5c32.71192,0 59.125,26.41308 59.125,59.125c0,14.40332 -5.12304,27.54688 -13.60547,37.79297c-4.61914,-13.10156 -14.61328,-23.6416 -27.37891,-28.84864c5.33301,-4.91308 8.73438,-11.92578 8.73438,-19.69433c0,-14.78125 -12.09375,-26.875 -26.875,-26.875c-14.78125,0 -26.875,12.09375 -26.875,26.875c0,7.76855 3.40136,14.78125 8.73438,19.69433c-12.76562,5.20703 -22.71777,15.74707 -27.33692,28.84864c-8.52441,-10.24609 -13.64746,-23.38965 -13.64746,-37.79297c0,-32.71192 26.41308,-59.125 59.125,-59.125zM80.625,53.75c8.98633,0 16.125,7.13868 16.125,16.125c0,8.98633 -7.13867,16.125 -16.125,16.125c-8.98632,0 -16.125,-7.13867 -16.125,-16.125c0,-8.98632 7.13868,-16.125 16.125,-16.125zM80.625,96.75c18.2666,0 33.25781,12.97558 36.74317,30.19239c-10.12011,8.02051 -22.84375,12.80761 -36.74317,12.80761c-13.89942,0 -26.62304,-4.7871 -36.70117,-12.80761c3.44335,-17.2168 18.43456,-30.19239 36.70117,-30.19239z"></path></g></g></svg>
          <p id='login' className='center'> Login </p>
          </a></div> */}
          <Switch>  
            {/* <UserContext.Provider value={{ auth: auth, user: user }}> */}
                <Route path='/' exact component={SignIn}/>
                <Route path='/SignIn' component={SignIn}/>
              
              <Route path='/Journal' component={Journal}/>
              {/* <MusicContext.Provider value={{ state, dispatch }}> */}
                <Route path='/GenrePicker' component={GenrePicker} />
                <Route path='/Sliders' component={Sliders} />
                <Route path='/Results' component={Results}/>
                <Route path='/PlayMusic' component={PlayMusic}/>
                {/* </MusicContext.Provider> */}
              {/* </UserContext.Provider> */}
          </Switch>
        </BrowserRouter>
        </div>
      )
  // } else if (!auth) {
  //     return(<div>loading...</div>)      
  // }
}

export default App;

