import React from "react";
import {Link} from "react-router-dom";
import Swiper from "react-id-swiper";
import { Container, Row, Col } from "react-bootstrap";

import PropTypes from 'prop-types';


const SliderTwo = ({ sliderData, spaceBottomClass }) => {

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
                <div
                    className="hero-slider-five__wrapper">
                    <Swiper {...params}>
                        {sliderData && sliderData.map((single) => {
                            return (
                                <div
                                    className="hero-slider-five__slide bg-img"
                                    style={{ backgroundImage: `url(https://www.google.co.kr/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F255379%2Fpexels-photo-255379.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbackground%2520image%2F&tbnid=AG8O7TVqhNu-MM&vet=12ahUKEwjFyeqOzcDsAhUHdJQKHQbnAPkQMygAegUIARChAQ..i&docid=0aKRK2RZxWjguM&w=500&h=332&q=background%20image&ved=2ahUKEwjFyeqOzcDsAhUHdJQKHQbnAPkQMygAegUIARChAQ)`}}
                                    key={single.id}
                                >
                                    <Container className="h-100">
                                        <Row className="align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100">
                                            <Col lg={6} className="order-2 order-lg-1">
                                                <div className="hero-slider-five__content">
                                                    {/*<h5 className="sub-title">{single.subtitle}</h5>*/}
                                                    <h1
                                                        className="title"
                                                        dangerouslySetInnerHTML={{ __html: single.name }}
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


SliderTwo.propTypes = {
    sliderData: PropTypes.array
}



export default SliderTwo;
