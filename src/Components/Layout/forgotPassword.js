import React, {Component} from 'react';
import fire from '../../Redux/fbConfig/fbConfig';
import {Link} from "react-router-dom";
import swal from "sweetalert";

export default class forgotPassword extends Component {
    state = {
        email: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        fire
            .auth()
            .sendPasswordResetEmail(this.state.email)
            .then(() => {
                  swal({
                      title: "See you soon",
                      text: "A reset link has been sent to your email",
                      icon: "success"
                  })
            })
            .catch((err) => {
                swal({
                    title: "Sorry, unfortunately we cant process your request",
                    text: err.message,
                    icon: "error"
                })
                console.log(err)
            })
    }

    render() {
        return (
            <div className="flex_center full_height">
                <div className="forgot_form_inner align">
                    <div className="form_holder w-100">
                        <form method="POST" onSubmit={this.handleSubmit}>
                            <div className="form_element">
                                <label className="text_is_grey section__text--small">Please provide your email below</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                    onChange={this.handleChange}/>
                            </div>

                            <div className="btn_holder mt-4">
                                <button type="submit" className="default_btn">Send Password Reset Email</button>
                            </div>
                            <div className="v_align mt-2">
                                <p className="section__text--small">Already have an account?
                                    <Link to='/' className="text_color ml-2">Go Back Home</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
