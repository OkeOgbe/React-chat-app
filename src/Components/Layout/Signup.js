import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';
import login_img from "../../images/Mobile login-pana.svg";
import fire from '../../Redux/fbConfig/fbConfig';
import swal from "sweetalert";


export class Signup extends Component {
    state={
        name:'',
        username:'',
        email: '',
        password:'',  
    }

    handleSubmit= (e)=>{
        e.preventDefault();
        console.log(this.state)
        fire.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
        ).then((user)=>{
             swal({
                 title: "Welcome to howdy",
                 text: "Nice to have you around, May i take your coat",
                 icon: "success"
             })
            console.log(user)
        }).catch((err)=>{
             swal({
                 title: "Sorry We couldnt sign you up",
                 text: err.message,
                 icon: "error"
             })
            console.log(err)
        })
    }

    
    handleChange= (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        if(fire.auth().currentUser){
            return <Redirect to="/app"/>
        }
        
        return (
            <div className="container">
                <div className="hero">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hero_img_holder align  animate__animated animate__fadeInUp">
                                <img src={login_img} className="w-100" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="signup_form_holder align">
                                <div className="signup_form w-100">
                                    < h2 className = "section__head--small v_align text_color" > Sign Up </h2>
                                    <form method="POST">
                                        <div className="form_element">
                                            <input type="text" name="name" placeholder="Name" required onChange={this.handleChange}/>
                                        </div>
                                        <div className="form_element mt-2">
                                            <input type="text" name="username" username="" placeholder="Username" required onChange={this.handleChange}/>
                                        </div>
                                        <div className="form_element mt-2">
                                            <input type="email" name="email" placeholder="Email" required onChange={this.handleChange}/>
                                        </div>
                                        <div className="form_element mt-2">
                                            <input type="password" name="password" placeholder="Password" required onChange={this.handleChange}/>
                                        </div>

                                        <div className="btn_holder mt-3">
                                            <button type="submit" className="default_btn w-100" onClick={this.handleSubmit}>Signup</button>
                                        </div>
                                    </form>
                                    <div className="v_align mt-2">
                                        <p className="section__text--small">Already have an account? <Link to='/Login' className="text_color ml-2">Login Here</Link></p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Signup


