import React, {useState} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {LayoutTwo} from "../../components/Layout/Layout";
import {connect} from 'react-redux';
import {registerUser} from "../../actions/authActions";

import img from '../../assets/images/IMG_9849.jpg'

const Register = ({history, registerUser}) => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        textChange: "Register"
    });

    const {username, email, password, confirmPassword, textChange} = formData

    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(password !== confirmPassword) {
            alert("password dose not matching")
        }


        console.log("--------", formData)
        registerUser(formData, history)

    }

    return (
        <LayoutTwo>
            <Breadcrumb
                title="Customer Register"
                backgroundImage={require("../../assets/images/backgrounds/breadcrumb-bg-1.png")}
            >
            </Breadcrumb>
            <div className="login-area space-mt--r130 space-mb--r130">
                <Container>
                    <Row>
                        <Col lg={6} className="space-mb-mobile-only--50">
                            <div className="lezada-form login-form--register ">
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="section-title--login text-center space-mb--50">
                                                <h2 className="space-mb--20">Register</h2>
                                                <p>If you don’t have an account, register now!</p>
                                            </div>
                                        </Col>
                                        <Col lg={12} className="space-mb--20">
                                            <label htmlFor="regEmail">
                                                Name <span className="required">*</span>{" "}
                                            </label>
                                            <input
                                                type='text'
                                                id="regEmail"
                                                required
                                                className="pt-0"
                                                onChange={handleChange('username')}
                                                value={username}
                                            />
                                        </Col>
                                        <Col lg={12} className="space-mb--20">
                                            <label htmlFor="regEmail">
                                                Email Address <span className="required">*</span>{" "}
                                            </label>
                                            <input
                                                type="email"
                                                id="regEmail"
                                                required
                                                className="pt-0"
                                                onChange={handleChange("email")}
                                                value={email}
                                            />
                                        </Col>
                                        <Col lg={12} className="space-mb--20">
                                            <label htmlFor="regEmail">
                                                Password <span className="required">*</span>{" "}
                                            </label>
                                            <input
                                                type="password"
                                                id="regEmail"
                                                required
                                                className="pt-0"
                                                onChange={handleChange('password')}
                                                value={password}
                                            />
                                        </Col>
                                        <Col lg={12} className="space-mb--50">
                                            <label htmlFor="regEmail">
                                                Confirm Password <span className="required">*</span>{" "}
                                            </label>
                                            <input
                                                type="password"
                                                id="regEmail"
                                                required
                                                className="pt-0"
                                                onChange={handleChange("confirmPassword")}
                                                value={confirmPassword}
                                            />
                                        </Col>
                                        <Col lg={12} className="space-mb--30">
                                            <button
                                                type="submit"
                                                className="lezada-button lezada-button--medium"
                                            >
                                                {textChange}
                                            </button>
                                        </Col>
                                        <Col>
                                            <Link to='/login' className="reset-pass-link">
                                                Go to Login Page
                                            </Link>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img
                                src={img}
                                alt=""
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </LayoutTwo>
    );
};


Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}


const mapStateToProps = (state) => ({
    auth: state.authData,
    error: state.errors
})


export default connect(mapStateToProps, {registerUser})(withRouter(Register));
