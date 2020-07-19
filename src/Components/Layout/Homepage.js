import React from 'react'
import { Link} from 'react-router-dom';
import hero_img from "../../images/Group Chat-pana.svg";

const Homepage = () => {
    return (
        <div>
            <div className="container">
                <div className="hero">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hero_text_holder align">
                                <div className="hero_inner  animate__animated animate__fadeInUp">
                                    <h2 className="text_color section__head">Welcome to Howdy!</h2>
                                    <p className="section__text mt-3">Howdy is a lightweight chat app built to help
                                        you connect with other people around . To get started, signup by clicking the
                                        button below and let's get started.</p>
                                    <div className="btn_holder mt-4">
                                        <Link to="/signup" className="default_btn">Get started</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 order-1">
                            < div className="hero_img_holder align  animate__animated animate__fadeInUp">
                                <img src={hero_img} className="w-100" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Homepage



