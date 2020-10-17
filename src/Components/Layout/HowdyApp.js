import React from 'react'
import {Redirect} from 'react-router-dom'
import fire from '../../Redux/fbConfig/fbConfig';
import swal from "sweetalert";
import {logOut} from '../../Redux/actions/Authactions';
import {connect} from "react-redux";
import Nav from "./Nav";

const HowdyApp = (props) => {

   const SignOut = () => {
       fire
        .auth()
        .signOut()
        .then((user => {
            swal({title: "See you later", text: "You have been logged out!", icon: "success"})
        }))
        .catch((err => {
            swal({title: "Sorry, Couldnt Log out", text: "Unforetunately, you havent been logged out", icon: "error"})
        }));
    }

    if (!fire.auth().currentUser) {
        return <Redirect to="/login"/>
    }

    return (
        <div>
            <Nav/>
            <div className="container">
                <h1>Welcome To HowdyApp</h1>
                <button className="btn btn-primary" onClick={SignOut}>Logout</button>
            </div>
        </div>
    )
}


export default HowdyApp;
