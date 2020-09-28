import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Signup from "./Components/Layout/Signup";
import Login from "./Components/Layout/Login";
import Homepage from './Components/Layout/Homepage';
import forgotPassword  from "./Components/Layout/forgotPassword";
import './App.css';
import fire from './Redux/fbConfig/fbConfig';
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
            <Router> 
                <div className="App">
                    <div className="">
                    <Switch>
                        {/* {
                        this.state.user? <HowdyApp/>: <Homepage/>
                        } */}
                        <Route path="/" exact component={Homepage}/>
                        <Route path='/signup' component={Signup}/>
                        <Route path='/login' component={Login}/>
                        <Route path="/app" exact component={HowdyApp}/>
                        <Route path="/forgotPassword" exact component={forgotPassword} />
                    </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App
