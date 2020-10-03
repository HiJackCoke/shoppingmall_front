import React from 'react';
import {Link} from 'react-router-dom';
import { Tab, Nav, Container, Row, Col } from 'react-bootstrap';
import {IoIosAdd} from 'react-icons/io';


const ProductTab = () => {
    return (
        <div className="product-tab space-mb--r100">
            <Container className="wide">
                <Tab.Container defaultActiveKey="popular">
                    <Nav
                        variant="pills"
                        className="product-tab__navigation text-center justify-content-center space-mb--r60"
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="new">New</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="popular">Popular</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="sale">Sale</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="new">
                            <Row className="space-mb--rm50">
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="popular">
                            <Row className="space-mb--rm50">
                                <img src={require('../../assets/images/product/decor/6.jpg')}
                                     className="space-mb--r50 col-lg-4 col-md-6"
                                />
                                <img src={require('../../assets/images/product/decor/6.jpg')}
                                     className="space-mb--r50 col-lg-4 col-md-6"
                                />
                                <img src={require('../../assets/images/product/decor/6.jpg')}
                                     className="space-mb--r50 col-lg-4 col-md-6"
                                />
                                <img src={require('../../assets/images/product/decor/6.jpg')}
                                     className="space-mb--r50 col-lg-4 col-md-6"
                                />
                                <img src={require('../../assets/images/product/decor/6.jpg')}
                                     className="space-mb--r50 col-lg-4 col-md-6"
                                />
                                <img src={require('../../assets/images/product/decor/6.jpg')}
                                     className="space-mb--r50 col-lg-4 col-md-6"
                                />
                                <img src={require('../../assets/images/product/decor/6.jpg')}
                                     className="space-mb--r50 col-lg-4 col-md-6"
                                />
                                <img src={require('../../assets/images/product/decor/6.jpg')}
                                     className="space-mb--r50 col-lg-4 col-md-6"
                                />
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="sale">
                            <Row className="space-mb--rm50">

                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                <Row>
                    <Col lg={12} className="mt-5 text-center">
                        <Link
                            to="/"
                            className="lezada-button lezada-button--medium lezada-button--icon--left"
                        >
                            <IoIosAdd />
                            Online Store
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductTab;
