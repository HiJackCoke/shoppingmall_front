import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { IoIosPin, IoIosCall, IoIosMail, IoIosClock } from "react-icons/io";

import {LayoutTwo} from "../../components/Layout/Layout";
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Location = () => {
    return (
        <LayoutTwo>
            <Breadcrumb
                title="STORE LOCATION"
                backgroundImage={require("../../assets/images/backgrounds/breadcrumb-bg-1.png")}
            />
            <div className="contact-page-content-wrapper space-mt--r130 space-mb--r130">
                <div className="contact-page-top-info space-mb--r100">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <SectionTitle
                                    title="Store Location"
                                    subtitle="COME HAVE A LOOK"
                                />
                            </Col>
                        </Row>
                        <Row className="space-mb-mobile-only--m50">
                            <Col md={4} className="space-mb-mobile-only--50">
                                <div className="icon-box">
                                    <div className="icon-box__icon">
                                        <IoIosPin/>
                                    </div>
                                    <div className="icon-box__content">
                                        <h3 className="title">
                                            ADDRESS
                                        </h3>
                                        <p className="content">
                                            South Korea Incheon
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="space-mb-mobile-only-50">
                                <div className="icon-box">
                                    <div className='icon-box__icon'>
                                        <IoIosCall/>
                                    </div>
                                    <div className="icon-box__content">
                                        <h3 className="title">
                                            CONTACT
                                        </h3>
                                        <p className="content">
                                            Mobile: 010 - 6779 -6574{" "}
                                            <span>Hotline: 0000-0000</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-box">
                                    <div className='icon-box__icon'>
                                        <IoIosMail/>
                                    </div>
                                    <div className='icon-box__content'>
                                        <p className="content">
                                            Mail : dsa1520@naver.com
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="space-mb-mobile-only--50">
                                <div className="icon-box">
                                    <div className="icon-box__icon">
                                        <IoIosClock/>
                                    </div>
                                    <div className="icon-box__content">
                                        <h3 className="title">
                                            HOUR OF OPERATION
                                        </h3>
                                        <p className="content">
                                            Monday – Friday : 09:00 – 18:00
                                            <span>Sunday &amp; Saturday : NO OPERATION </span>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="contact-page-map space-mb--r100">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="google-map">
                                    <iframe
                                        title="map"
                                        src="https://map.naver.com/v5/?c=14098099.2417034,4506503.8482520,15,0,0,0,dh"
                                        allowFullScreen
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </LayoutTwo>
    );
};

export default Location;
