import React, {useState} from 'react';
import fire from '../../Redux/fbConfig/fbConfig';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import swal from "sweetalert";
import {forgotpass} from '../../Redux/actions/Authactions';

const forgotPassword = (props) => {

    const [state,
        setState] = useState({email: ""})

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const {forgot} = props;
        forgot(state);
    }

    return (
        <div className="flex_center full_height">
            <div className="forgot_form_inner align">
                <div className="form_holder w-100">
                    <form method="POST" onSubmit={handleSubmit}>
                        <div className="form_element">
                            <label className="text_is_grey section__text--small">Please provide your email below</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                onChange={handleChange}/>
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

const mapDispatchToProps = (dispatch) => ({
    forgot: (email) => dispatch(forgotpass(email))
})

export default connect(null, mapDispatchToProps)(forgotPassword);