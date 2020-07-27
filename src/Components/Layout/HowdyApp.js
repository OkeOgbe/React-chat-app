import React, { Component } from 'react'
import { Redirect} from 'react-router-dom'
import fire from '../../Config/firebaseConfig'


export class HowdyApp extends Component {

   SignOut=()=>{
        fire.auth().signOut().then((user=>{
            alert('you are logged Out')
        })).catch((err =>{
            alert('failed to log out')
        }))
    }

    render() {
        if(!fire.auth().currentUser){
            return <Redirect to="/login"/>
        }

        return (
            <div>
                <h1>Welcome To HowdyApp</h1>
                <button className="btn btn-primary" onClick={this.SignOut}>Logout</button>
            </div>
        )
    }
}

export default HowdyApp


