import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Signup from "./Components/Layout/Signup";
import Login from "./Components/Layout/Login";
import Homepage from './Components/Layout/Homepage';
import './App.css';
import fire from './Config/firebaseConfig';
import {Provider} from 'react-redux';
import store from './store';
import HowdyApp from './Components/Layout/HowdyApp';

export class App extends Component {

    state = {
        user: {}
    }

    AuthForLogin = () => {
        fire
            .auth()
            .onAuthStateChanged((user) => {
                if (this.state.user) {
                    this.setState({user})
                } else {
                    this.setState({user: null})
                }
            })
    }

    componentDidMount() {
        this.AuthForLogin();
    }

    render() {
        return (
            <Provider store={store}>
                <Router> 
          <div className="App">
            <div className="container">
              <Switch>
                {/* {
                  this.state.user? <HowdyApp/>: <Homepage/>
                } */}
                <Route path="/" exact component={Homepage}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/login' component={Login}/>
                <Route path="/app" exact component={HowdyApp}/>
                
              </Switch>
            </div>
          </div>
      </Router>
            </Provider>
        )
    }
}

export default App
