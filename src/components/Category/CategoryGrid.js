import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

const CategoryGrid = ({ spaceBottomClass }) => {
    return (
        <div
            className={`product-category-container ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
            <Container className="wide">
                <Row>
                    <Col lg={3} md={6}>
                        <div className="single-category single-category--one">
                            <div className="single-category__image single-category__image--one">
                                <img
                                    src={require('../../assets/images/category/1.jpg')}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                                <div className="title">
                                    <p>Men</p>
                                    <Link
                                        to="/"
                                    >
                                        Online store
                                    </Link>
                                </div>
                                <p className="product-count">999</p>
                            </div>
                            <Link
                                to="/"
                                className="banner-link"
                            />
                        </div>
                    </Col>


                    <Col lg={3} md={6}>
                        <div className="single-category single-category--one">
                            <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                                <div className="title">
                                    <p>Shoes</p>
                                    <Link to="/">
                                        Online Store
                                    </Link>
                                </div>
                                <p className="product-count">222</p>
                            </div>

                            <div className="single-category__image single-category__image--one">
                                <img
                                    src={require('../../assets/images/category/1.jpg')}
                                    className="img-fluid"
                                />
                            </div>
                            <Link
                                to="/"
                                className="banner-link"
                            />
                        </div>
                    </Col>

                    <Col lg={3} md={6}>
                        <div className="single-category single-category--one">
                            <div className="single-category__image single-category__image--one">
                                <img
                                    src={require('../../assets/images/category/1.jpg')}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                                <div className="title">
                                    <p>Men</p>
                                    <Link
                                        to="/"
                                    >
                                        Online store
                                    </Link>
                                </div>
                                <p className="product-count">999</p>
                            </div>
                            <Link
                                to="/"
                                className="banner-link"
                            />
                        </div>
                    </Col>


                    <Col lg={3} md={6}>
                        <div className="single-category single-category--one">
                            <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                                <div className="title">
                                    <p>Shose</p>
                                    <Link to="/">
                                        Online Store
                                    </Link>
                                </div>
                                <p className="product-count">222</p>
                            </div>

                            <div className="single-category__image single-category__image--one">
                                <img
                                    src={require('../../assets/images/category/1.jpg')}
                                    className="img-fluid"
                                />
                            </div>
                            <Link
                                to="/"
                                className="banner-link"
                            />
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="single-category single-category--one">
                            <div className="single-category__image single-category__image--one">
                                <img
                                    src={require('../../assets/images/category/1.jpg')}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                                <div className="title">
                                    <p>Men</p>
                                    <Link
                                        to="/"
                                    >
                                        Online store
                                    </Link>
                                </div>
                                <p className="product-count">999</p>
                            </div>
                            <Link
                                to="/"
                                className="banner-link"
                            />
                        </div>
                    </Col>


                    <Col lg={3} md={6}>
                        <div className="single-category single-category--one">
                            <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                                <div className="title">
                                    <p>Shose</p>
                                    <Link to="/">
                                        Online Store
                                    </Link>
                                </div>
                                <p className="product-count">222</p>
                            </div>

                            <div className="single-category__image single-category__image--one">
                                <img
                                    src={require('../../assets/images/category/1.jpg')}
                                    className="img-fluid"
                                />
                            </div>
                            <Link
                                to="/"
                                className="banner-link"
                            />
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="single-category single-category--one">
                            <div className="single-category__image single-category__image--one">
                                <img
                                    src={require('../../assets/images/category/1.jpg')}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                                <div className="title">
                                    <p>Men</p>
                                    <Link
                                        to="/"
                                    >
                                        Online store
                                    </Link>
                                </div>
                                <p className="product-count">999</p>
                            </div>
                            <Link
                                to="/"
                                className="banner-link"
                            />
                        </div>
                    </Col>


                    <Col lg={3} md={6}>
                        <div className="single-category single-category--one">
                            <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                                <div className="title">
                                    <p>Shose</p>
                                    <Link to="/">
                                        Online Store
                                    </Link>
                                </div>
                                <p className="product-count">222</p>
                            </div>

                            <div className="single-category__image single-category__image--one">
                                <img
                                    src={require('../../assets/images/category/1.jpg')}
                                    className="img-fluid"
                                />
                            </div>
                            <Link
                                to="/"
                                className="banner-link"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CategoryGrid;
