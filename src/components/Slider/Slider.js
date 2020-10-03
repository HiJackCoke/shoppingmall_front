import React from 'react';
import { Link } from 'react-router-dom';
import Swiper from "react-id-swiper";
import { Container, Row, Col } from 'react-bootstrap';
import bgImage from '../../assets/images/backgrounds/404-bg.jpg';

const Slider = ({sliderData}) => {

    const params = {

    }

    return (
        <div className="hero-slider-seven">
            <div className="hero-slider-seven__wrapper">
                <Swiper {...params}>
                    <div
                        className="hero-slider-seven__slide bg-img"
                        style={{backgroundImage: `url(${bgImage})`}}
                    >
                        <Container className="h-100">
                            <Row className="align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100">
                                <Col lg={6} className="order-2 order-lg-1">
                                    <div className="hero-slider-three__content">
                                        <h5 className="sub-title">subtitle</h5>
                                        <h1 className="title">Title</h1>
                                        <div className="slider-link">
                                            <Link
                                                to="/"
                                                className="lezada-button lezada-button--medium"
                                            >
                                                shop collection
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Swiper>
            </div>
        </div>
    )
};

export default Slider;
