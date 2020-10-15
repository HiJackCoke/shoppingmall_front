import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

import axios from 'axios'

const CategoryGrid = ({ spaceBottomClass}) => {

    const [products, setProducts] = useState({})

    const getData = async () => {
        const {data} = await axios.get('/products')
        setProducts(data)

        console.log(data[0].name)
    }

    useEffect(() => {
        getData()
    }, [])




    return (
        <div
            className={`product-category-container ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
            <Container className="wide">
                <Row>
                    <Col lg={3} md={6}>
                        {products.images && products.images.map((image) => {
                            return (
                                <div className="single-category single-category--one">
                                    <div className="single-category__image single-category__image--one">
                                        <img
                                            src="http://localhost:1337/uploads/thumbnail_IMG_7313_621ae6c379.JPG"
                                            className="img-fluid"
                                        />

                                    </div>
                                    <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                                        <div className="title">
                                            <p>New</p>
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
                            )
                        })}

                    </Col>


                    <Col lg={3} md={6}>
                        <div className="single-category single-category--one">
                            <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                                <div className="title">
                                    <p>Best</p>
                                    <Link to="/">
                                        Online Store
                                    </Link>
                                </div>
                                <p className="product-count">222</p>
                            </div>

                            <div className="single-category__image single-category__image--one">
                                <img
                                    src={require('../../assets/images/product/DSC08879n2.jpg')}
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
