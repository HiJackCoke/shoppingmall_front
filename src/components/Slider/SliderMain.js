import React from "react";
import {Link} from "react-router-dom";
import Swiper from "react-id-swiper";
import { Container, Row, Col } from "react-bootstrap";

import PropTypes from 'prop-types';


const SliderMain = ({ sliderData, spaceBottomClass }) => {

    console.log("222223232323232",sliderData)
    const params = {
        loop: true,
        speed: 1000,
        watchSlidesVisibility: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },

        renderPrevButton: () => (
            <button className="swiper-button-prev ht-swiper-button-nav">Prev</button>
        ),
        renderNextButton: () => (
            <button className="swiper-button-next ht-swiper-button-nav">Next</button>
        )
    };
    return (
        <div
            className={`hero-slider-five ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
            <Container className="wide">
                <div className="hero-slider-five__wrapper">
                    {sliderData.length > 0 ?
                        <Swiper {...params}>
                            {sliderData && sliderData.map((single) => {
                                return (
                                    <div
                                        className="hero-slider-five__slide bg-img"
                                        style={{ backgroundImage: `url(${single.images[0].url})`}}
                                        key={single.id}
                                    >
                                        <Container className="h-100">
                                            <Row className="align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100">
                                                <Col lg={6} className="order-2 order-lg-1">
                                                    <div className="hero-slider-five__content">
                                                        <h1
                                                            className="title"
                                                            dangerouslySetInnerHTML={{ __html: single.name }}
                                                        />
                                                        <div className="slider-link">
                                                            <Link
                                                                className="lezada-button lezada-button--medium"
                                                                to={`/shop/${single.id}`}
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
                        </Swiper> : false
                    }
                </div>
            </Container>
        </div>
    );
};


SliderMain.propTypes = {
    sliderData: PropTypes.array
}



export default SliderMain
