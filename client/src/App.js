import React, { Component} from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import Journal from './components/Journal';
import GenrePicker from './components/GenrePicker';
import Sliders from './components/Sliders';
import SignIn from './components/SignIn';
import PlayMusic from './components/PlayMusic';
import Results from './components/Results';
import PlaylistList from './components/PlalistList';
import './App.css';
import './App.css';

class App extends Component{

  
  render(){
    return (
      <div>
          <BrowserRouter>

                <Switch>
                  <Route path='/' exact component={SignIn}/>
                  <Route path='/SignIn' component={SignIn}/>    
                    <Route path='/Journal' component={Journal}/>
                    <Route path='/GenrePicker' component={GenrePicker} />
                    <Route path='/Playlist' component={PlaylistList} />
                    <Route path='/Sliders' component={Sliders} />
                    <Route path='/Results' component={Results}/>
                    <Route path='/PlayMusic' component={PlayMusic}/>
                  </Switch>
            </BrowserRouter>
          </div>

            )
        }         
          
}

export default App;

