import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom';
import login_alt_img from "../../images/Mobile login-bro.svg";
import {loginUser} from '../../Redux/actions/Authactions';
import {connect} from 'react-redux';
import fire from '../../Redux/fbConfig/fbConfig';
import swal from "sweetalert";

const Login = (props) => {

    const [state,
        setState] = useState({email: "", password: ""})

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const {login} = props;
        const {email, password} = state;

        login(email, password);

    }

    if (fire.auth().currentUser) {
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
                                < h2 className="section__head--small v_align text_color">
                                    Login</h2>
                                <form method="POST">

                                    <div className="form_element mt-2">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                            required
                                            onChange={handleChange}/>
                                    </div>

                                    <div className="form_element mt-2">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            required
                                            onChange={handleChange}/>
                                    </div>

                                    <div className="btn_holder mt-3">
                                        <button type="submit" className="default_btn w-100" onClick={handleSubmit}>Login</button>
                                    </div>
                                </form>
                                <div className="v_align mt-2">
                                    <p className="section__text--small">Don't have an account?
                                        <Link to='/Signup' className="text_color">Signup Here</Link>
                                    </p>
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

const mapDispatchToProps = (dispatch) => ({
    login: (email, password) => dispatch(loginUser(email, password))
})
export default connect(null, mapDispatchToProps)(Login);
