import React from 'react';
import {Link} from 'react-router-dom';
import login_alt_img from "../../images/Mobile login-bro.svg";

function Login() {
    return (
        <div>
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
                                        <input type="text" placeholder="Username" required/>
                                    </div>
                                   
                                    <div className="form_element mt-2">
                                        <input type="password" placeholder="Passoword" required/>
                                    </div>

                                    <div className="btn_holder mt-3">
                                        <button type="submit" className="default_btn w-100">Login</button>
                                    </div>
                                </form>
                                <div className="v_align mt-2">
                                    <p className="section__text--small">Don't have an account? <Link to='/Signup' className="text_color">Signup Here</Link></p>
                                </div>
                            </div>
                       </div>
                       
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Login;