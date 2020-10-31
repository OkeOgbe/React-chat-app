import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom';
import login_img from "../../images/Mobile login-pana.svg";
import fire from '../../Redux/fbConfig/fbConfig';
import {createNewUser} from '../../Redux/actions/Authactions';
import {connect} from "react-redux";

const Signup = (props) => {

    const [state,
        setState] = useState({name: '', username: '', email: '', password: ''});

    const {name, username, email, password} = state;

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(state);

        const {signup} = props;
        const newUser = state;
        signup(newUser);

        setState({
            ...state,
            name: "",
            username: "",
            email: '',
            password: ''
        });

    }

    if (fire.auth().currentUser) {
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
                                < h2 className="section__head--small v_align text_color">
                                    Sign Up
                                </h2>
                                <form method="POST">
                                    <div className="form_element">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            required
                                            value={name}
                                            onChange={handleChange}/>
                                    </div>
                                    <div className="form_element mt-2">
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                            required
                                            value={username}
                                            onChange={handleChange}/>
                                    </div>
                                    <div className="form_element mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            required
                                            value={email}
                                            onChange={handleChange}/>
                                    </div>
                                    <div className="form_element mt-2">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            required
                                            value={password}
                                            onChange={handleChange}/>
                                    </div>

                                    <div className="btn_holder mt-3">
                                        <button type="submit" className="default_btn w-100" onClick={handleSubmit}>Signup</button>
                                    </div>
                                </form>
                                <div className="v_align mt-2">
                                    <p className="section__text--small">Already have an account?
                                        <Link to='/Login' className="text_color ml-2">Login Here</Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (newUser) => dispatch(createNewUser(newUser))
    }
}

export default connect(null, mapDispatchToProps)(Signup)
