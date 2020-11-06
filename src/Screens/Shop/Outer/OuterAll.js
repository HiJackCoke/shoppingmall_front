import React from 'react';
import {Link} from 'react-router-dom'

import {LayoutTwo} from "../../../components/Layout/Layout";
import BreadCrumb from "../../../components/Breadcrumb/Breadcrumb";
import ShopHeader from "../../../components/Shop/ShopHeader";
import {Col, Container, Row} from "react-bootstrap";
import ShopProducts from "../../../components/Shop/ShopProducts";

const OuterAll = ({product}) => {
    return (
        <LayoutTwo>
            <BreadCrumb
                backgroundImage={require("../../../assets/images/backgrounds/breadcrumb-bg-1.png")}
                title="OUTER"
            />
            <div className="shop-page-content">

                <ShopHeader/>

                <div
                    className="text-center mt-5"
                    style={{fontSize: "x-large"}}
                >
                    <Link
                        className='mr-5'
                        to="/shop/outer/long"
                    >
                        LONG COAT
                    </Link>

                    <Link
                        className='mr-5'
                        to="/shop/outer/short"
                    >
                        SHORT COAT
                    </Link>

                    <Link
                        to="/shop/outer/jacket"
                    >
                        JACKET
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

export default OuterAll;
