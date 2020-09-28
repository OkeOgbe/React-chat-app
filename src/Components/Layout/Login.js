import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';
import login_alt_img from "../../images/Mobile login-bro.svg";
import fire from '../../Redux/fbConfig/fbConfig';
import swal from "sweetalert";


export class Login extends Component {

    state={
        email: '',
        password:'',  
    }

        
    handleChange= (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit= (e)=>{
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user)=>{
            swal({
                title: "Welcome Back",
                text: "It's been a while, How you been?",
                icon: "success"
            })
            console.log(user)
        }).catch((e)=>{
             swal({
                 title: "Sorry unfortunately you can't come inside",
                 text: e.message,
                 icon: "error"
             })
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
                        < div className="hero_img_holder align  animate__animated animate__fadeInUp">
                                <img src={login_alt_img} className="w-100" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="signup_form_holder align">
                                <div className="signup_form w-100">
                                    < h2 className = "section__head--small v_align text_color" > Login</h2>
                                    <form method="POST">
                                    
                                        <div className="form_element mt-2">
                                            <input type="text" name="email" placeholder="Email" required onChange={this.handleChange}/>
                                        </div>
                                    
                                        <div className="form_element mt-2">
                                            <input type="password" name="password" placeholder="Password" required onChange={this.handleChange}/>
                                        </div>

                                        <div className="btn_holder mt-3">
                                            <button type="submit" className="default_btn w-100" onClick={this.handleSubmit}>Login</button>
                                        </div>
                                    </form>
                                    <div className="v_align mt-2">
                                        <p className="section__text--small">Don't have an account? <Link to='/Signup' className="text_color">Signup Here</Link></p>
                                    </div>

                                      <div className="v_align mt-2">
                                        <Link to='/forgotPassword' className="text_color ml-2">Forgot Password</Link>
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

export default Login


