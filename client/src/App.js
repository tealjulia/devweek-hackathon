import React, { Component} from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import Journal from './components/Journal';
import GenrePicker from './components/GenrePicker';
import Sliders from './components/Sliders';
import SignIn from './components/SignIn';
import Results from './components/Results';
import Header from './components/Header';
import PlaylistList from './components/Playlist';
import './App.css';



class App extends Component{

  
  render(){
    return (
      <div>
        <div className='AppBackground app-container'>
        <Header />
          <BrowserRouter>    

                <Switch>
                  <Route path='/' exact component={SignIn}/>
                  <Route path='/SignIn' component={SignIn}/>    
                    <Route path='/Journal' component={Journal}/>
                    <Route path='/GenrePicker' component={GenrePicker} />
                    <Route path='/Sliders' component={Sliders} />
                    <Route path='/Results' component={Results}/>
                  </Switch>
            </BrowserRouter>
          </div>
    </div>

            )
        }         
          
}

export default App;

