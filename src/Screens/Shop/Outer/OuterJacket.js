import React from 'react';

import {LayoutTwo} from "../../../components/Layout/Layout";
import BreadCrumb from "../../../components/Breadcrumb/Breadcrumb";
import ShopHeader from "../../../components/Shop/ShopHeader";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import ShopProducts from "../../../components/Shop/ShopProducts";

const OuterJacket = ({product}) => {
    return (
        <LayoutTwo>
            <BreadCrumb
                title="JACKET"
                backgroundImage={require("../../../assets/images/backgrounds/breadcrumb-bg-1.png")}
            />

            <div className="shop-page-content">

                <ShopHeader/>

                <div
                    className="text-center mt-5"
                    style={{fontSize: "x-large"}}
                >
                    <Link
                        className='mr-5'
                        to="/shop/outer/all"
                    >
                        All OUTER
                    </Link>

                    <Link
                        className='mr-5'
                        to="/shop/outer/long"
                    >
                        LONG COAT
                    </Link>

                    <Link
                        to="/shop/outer/short"
                    >
                        SHORT COAT
                    </Link>
                </div>

                <div className="shop-page-content__body space-mt--r100 space-mb--r130">
                    <Container className="wide">
                        <Row>
                            <Col>
                                <ShopProducts
                                    products={product}
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </LayoutTwo>
    );
};

export default OuterJacket;
