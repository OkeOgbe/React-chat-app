import React from 'react';
import {Link} from 'react-router-dom';
import login_img from "../../images/Mobile login-pana.svg";

function Signup() {
    return (
        <div>
            <div className="hero">
                <div className="row">
                    <div className="col-md-6">
                       < div className="hero_img_holder align  animate__animated animate__fadeInUp">
                            <img src={login_img} className="w-100" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                       <div className="signup_form_holder align">
                            <div className="signup_form w-100">
                                < h2 className = "section__head--small v_align text_color" > Sign Up </h2>
                                <form method="POST">
                                    <div className="form_element">
                                        <input type="text" placeholder="Name" required/>
                                    </div>
                                    <div className="form_element mt-2">
                                        <input type="text" placeholder="Username" required/>
                                    </div>
                                    <div className="form_element mt-2">
                                        <input type="email" placeholder="Email" required/>
                                    </div>
                                    <div className="form_element mt-2">
                                        <input type="password" placeholder="Passoword" required/>
                                    </div>

                                    <div className="btn_holder mt-3">
                                        <button type="submit" className="default_btn w-100">Signup</button>
                                    </div>
                                </form>
                                <div className="v_align mt-2">
                                    <p className="section__text--small">Already have an account? <Link to='/Login' className="text_color">Login Here</Link></p>
                                </div>
                            </div>
                       </div>
                       
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Signup;