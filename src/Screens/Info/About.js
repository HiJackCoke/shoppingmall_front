import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import { IoMdAdd } from "react-icons/io";
import ModalVideo from 'react-modal-video'

import {LayoutTwo} from "../../components/Layout/Layout";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import img from '../../assets/images/about.jpg'
import img2 from "../../assets/images/icon/icon-play-100x100.png"


const About = () => {

    const [modalVideo, setModalVideo] = useState(false)

    return (
        <LayoutTwo>
            <Breadcrumb
                title="About Us"
                backgroundImage={require("../../assets/images/backgrounds/breadcrumb-bg-1.png")}
            />

            <div className="about-content space-mt--r130 space-mb--r130">
                <div className="section-title-container space-mb--40">
                    <Container>
                        <Row>
                            <Col lg={8} className="ml-auto mr-auto">
                                {/* section title */}
                                <div className="about-title-container text-center">
                                    <h2 className="title space-mb--15">
                                        Neutral Color &amp; Fit
                                    </h2>
                                    <p className="title-text">
                                        Bloola Bloola Bloola Bloola Bloola Bloola Bloola Bloola Bloola Bloola
                                        Bloola Bloola Bloola Bloola Bloola Bloola Bloola Bloola Bloola Bloola
                                        Bloola Bloola Bloola Bloola Bloola Bloola Bloola Bloola Bloola Bloola
                                        Bloola Bloola Bloola Bloola Bloola Bloola Bloola Bloola Bloola Bloola
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>



            <div className="about-video-content space-mb--r100">
                <Container>
                    <Row>
                        <Col lg={10} className="ml-auto mr-auto">
                            <div
                                className="about-video-bg space-mb--60"
                                style={{
                                    backgroundImage: `url(${img})`
                                }}
                            >

                                <p className="video-text video-text-left">
                                    <Link
                                        to="/shop/all"
                                    >
                                        TONIST
                                    </Link>
                                </p>

                                <div className="about-video-content__text-icon d-flex flex-column h-100 justify-content-center">
                                    <div className="play-icon text-center space-mb--40">
                                        <ModalVideo
                                            channel="youtube"
                                            id=""
                                            isOpen={modalVideo}
                                            onClose={() => setModalVideo(false)}
                                        />

                                        <button onClick={() => setModalVideo(true)}>
                                            <img
                                                className="img-fluid"
                                                src={img2}
                                                alt=""
                                            />
                                        </button>
                                    </div>
                                    <h1>OUR STORY</h1>
                                </div>
                                <p className="video-text video-text-right">
                                    <Link
                                        to="/info/about"
                                    >
                                        STORE
                                    </Link>
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={10} className="ml-auto mr-auto">
                            <Row>
                                <Col md={6}>
                                    <div className="about-widget space-mb--35">
                                        <h2 className="widget-title space-mb--25">ADDRESS</h2>
                                        <p className="widget-content">
                                            South Korea Incheon
                                        </p>
                                    </div>
                                    <div className="about-widget space-mb--35">
                                        <h2 className="widget-title space-mb--25">PHONE</h2>
                                        <p className="widget-content">Mobile: 010-6779-6574</p>
                                    </div>
                                    <div className="about-widget">
                                        <h2 className="widget-title space-mb--25">EMAIL</h2>
                                        <p className="widget-content">dsa1520@naver.com</p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="about-page-text">
                                        <p className="space-mb--35">
                                            TONIST is compound word Tone &amp; ist, like the menaing of the word
                                            We Prioritize tone of Clothes and Make a look book sush as tone on tone
                                            &amp; tone and tone
                                        </p>
                                        <Link
                                            to="/shop/all"
                                            className="lezada-button lezada-button--medium lezada-button--icon--left"
                                        >
                                            <IoMdAdd /> online store
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

        </LayoutTwo>
    );
};

export default About;
