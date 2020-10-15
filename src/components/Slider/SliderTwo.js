import React from "react";
import {Link} from "react-router-dom";
import Swiper from "react-id-swiper";
import { Container, Row, Col } from "react-bootstrap";



const SliderTwo = ({ sliderData, spaceBottomClass }) => {
    const params = {
        loop: true,
        speed: 1000,
        watchSlidesVisibility: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },

        // renderPrevButton: () => (
        //     <button className="swiper-button-prev ht-swiper-button-nav">Prev</button>
        // ),
        // renderNextButton: () => (
        //     <button className="swiper-button-next ht-swiper-button-nav">Next</button>
        // )
    };
    return (
        <div
            className={`hero-slider-five ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
            <Container className="wide">
                <div
                    className="hero-slider-five__wrapper">
                    <Swiper {...params}>
                        {sliderData &&
                        sliderData.map((single, i) => {
                            return (
                                <div
                                    className="hero-slider-five__slide bg-img"
                                    style={{ backgroundImage: `url(${single.image})` }}
                                    key={i}
                                >
                                    <Container className="h-100">
                                        <Row className="align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100">
                                            <Col lg={6} className="order-2 order-lg-1">
                                                <div className="hero-slider-five__content">
                                                    <h5 className="sub-title">{single.subtitle}</h5>
                                                    <h1
                                                        className="title"
                                                        dangerouslySetInnerHTML={{ __html: single.title }}
                                                    />
                                                    <div className="slider-link">
                                                        <Link
                                                            className="lezada-button lezada-button--medium"
                                                            to={single.url}
                                                            as={process.env.PUBLIC_URL + single.url}
                                                        >
                                                            shop now
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            );
                        })}
                    </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default SliderTwo;
