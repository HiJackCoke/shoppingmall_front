import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import { IoMdAdd } from "react-icons/io";
import ModalVideo from 'react-modal-video'

import {LayoutTwo} from "../../components/Layout/Layout";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

import img from '../../assets/images/category/banner-bestseller-1.jpg'
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
                                        href="/shop/all"
                                    >
                                        <a>STORE</a>
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
                                            />
                                        </button>
                                    </div>
                                    <h1>OUR STORY</h1>
                                </div>
                                <p className="video-text video-text-right">
                                    <Link
                                        href="/info/about"
                                    >
                                        OUR STORE
                                    </Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </LayoutTwo>
    );
};

export default About;
