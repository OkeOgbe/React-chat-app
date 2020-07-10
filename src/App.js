import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import hero_img from "./images/Group Chat-pana.svg";
import Signup from "./Components/Layout/Signup";
import Login from "./Components/Layout/Login";
import Homepage from './Components/Layout/Homepage';
import './App.css';

function App() {
    return ( 
    < Router > 
      <div className="App">
          <div className="container">
              <Switch>
                  <Route path="/" exact component={Homepage}/>
                  <Route path='/signup' component={Signup}/>
                  <Route path='/login' component={Login}/>
              </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;