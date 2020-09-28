import React, { Component } from 'react'
import { Redirect} from 'react-router-dom'
import fire from '../../Redux/fbConfig/fbConfig';
import swal from "sweetalert";
import Nav from "./Nav";


export class HowdyApp extends Component {

   SignOut=()=>{
        fire.auth().signOut()
        .then((user=>{
            swal({
                title: "See you later",
                text: "You have been logged out!",
                icon: "success"
            })
        })).catch((err =>{
            swal({
                title: "Sorry, Couldnt Log out",
                text: "Unforetunately, you havent been logged out",
                icon: "error"
            })
        }))
    }

    render() {
        if(!fire.auth().currentUser){
            return <Redirect to="/login"/>
        }

        return (
            <div>
                <Nav />
                <div className="container">
                     <h1>Welcome To HowdyApp</h1>
                <button className="btn btn-primary" onClick={this.SignOut}>Logout</button>
                </div>
            </div>
        )
    }
}

export default HowdyApp;


