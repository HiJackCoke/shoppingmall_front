import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';


import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";

import {LayoutTwo} from "../../components/Layout/Layout";

const Register = () => {
    return (
        <LayoutTwo>
            <BreadCrumb
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
                {/*        Customer Register*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </BreadCrumb>
            <div className="login-area space-mt--r130 space-mb--r130">
                <Container>
                    <Col lg={6} className="space-mb-mobile-only--50">
                        <div className="lezada-form login-form--register ">
                            <form>
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
                                        <input type='text' id="regEmail" required className="pt-0"/>
                                    </Col>
                                    <Col lg={12} className="space-mb--20">
                                        <label htmlFor="regEmail">
                                           Email Address <span className="required">*</span>{" "}
                                       </label>
                                        <input type="email" id="regEmail" required className="pt-0"/>
                                    </Col>
                                    <Col lg={12} className="space-mb--20">
                                        <label htmlFor="regEmail">
                                            Password <span className="required">*</span>{" "}
                                        </label>
                                        <input type="password" id="regEmail" required className="pt-0" />
                                    </Col>
                                    <Col lg={12} className="space-mb--50">
                                        <label htmlFor="regEmail">
                                           Confirm Password <span className="required">*</span>{" "}
                                        </label>
                                        <input type="password" id="regEmail" required className="pt-0" />
                                    </Col>
                                    <Col lg={12} className="space-mb--30">
                                        <button className="lezada-button lezada-button--medium">
                                            Register
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
                </Container>
            </div>
        </LayoutTwo>
    );
};

export default Register;
