import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Home from "./components/Home";
import Loading from "./components/Loading";
import SpotifyRecommender from "./components/SpotifyRecommender";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [auth, setAuth] = useState(null);

  useEffect(() => {
    axios.get('/auth/current-session').then(({data}) => {
      setAuth(data);
    })
  }, []);

  if (auth === null) {
    return <Router><Loading/></Router>
  }
  if (auth) {
    return <Router><SpotifyRecommender auth={auth}/></Router>
  }
  return <Router>
    <Route exact path ='/' component = {Home}/>
    <Route path='/login' component={() => { 
     window.location.href = 'http://localhost:8000/auth/login'; 
     return null;
}}/></Router>
  
}

export default App;
