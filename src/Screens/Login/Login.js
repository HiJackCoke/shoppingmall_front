import React, {useState, useEffect} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from "../../actions/authActions";



import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import {LayoutTwo} from "../../components/Layout/Layout";
import img from "../../assets/images/IMG_9849.jpg"

const Login = ({history, loginUser}) => {

    const [formData, setFormData] = useState({
        identifier: "",
        password: "",
        textChange: "Log In"
    })

    const {identifier, password, textChange} = formData

    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value})
    };

    const handleSubmit = e => {
        e.preventDefault()

        loginUser(formData)
    }

    useEffect(() => {
        if(localStorage.jwtToken) {
            history.push('/')
        }
    })

    return (
        <LayoutTwo>
            <Breadcrumb
                title="Customer Login"
                backgroundImage={require("../../assets/images/backgrounds/breadcrumb-bg-1.png")}
            >
                {/*<ul className="breadcrumb__list">*/}
                {/*    <li>*/}
                {/*        <Link to="/">*/}
                {/*            Home*/}
                {/*        </Link>*/}
                {/*    </li>*/}

                {/*    <li>*/}
                {/*        Customer Login*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </Breadcrumb>
            <div className="login-area space-mt--r130 space-mb--r130">
                <Container>
                    <Row>
                        <Col lg={6} className="space-mb-mobile-only--50">
                            <div className="lezada-form login-form">
                                <form
                                    onSubmit={handleSubmit}
                                >
                                    <Row>
                                        <Col lg={12}>
                                            <div className="section-title--login text-center space-mb--50">
                                                <h2 className="space-mb--20">Login</h2>
                                                <p>Great to have you back!</p>
                                            </div>
                                        </Col>
                                        <Col lg={12} className="space-mb--20">
                                            <label htmlFor="logID">
                                                User ID <span className="required">*</span>{" "}
                                            </label>
                                            <input
                                                type='email'
                                                id="logID"
                                                required
                                                className="pt-0"
                                                value={identifier}
                                                onChange={handleChange('identifier')}
                                            />
                                        </Col>
                                        <Col lg={12} className="space-mb--40">
                                            <label htmlFor="logPassword">
                                                Password <span className="required">*</span>{" "}
                                            </label>
                                            <input
                                                type="password"
                                                id="logPassword"
                                                required className="pt-0"
                                                value={password}
                                                onChange={handleChange("password")}
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
                                            <input type="checkbox" />{" "}
                                            <span className="remember-text">Remember me</span>
                                            <Link to='/' className="reset-pass-link">
                                                Lost your password?
                                            </Link>
                                            <Link to="/register" className="reset-pass-link">
                                                Register Page
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

const mapStateToProps = (state) => ({
    auth: state.authData,
    errors: state.errors
})

const mapDispatchToProps = (dispatch) => ({
    loginUser: (userData) => {
        dispatch(loginUser(userData))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
