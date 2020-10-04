import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

import {LayoutTwo} from '../../components/Layout/Layout'
import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
import products from "../../products";

const ProductPage = ({match}) => {

    const product = products.find((p) => p._id === match.params.id)

    return (
        <LayoutTwo>
            <BreadCrumb
                title={product._id}
                backgroundImage={require("../../assets/images/backgrounds/breadcrumb-bg-1.png")}
            />

            <div className="product-details space-mt--r100 space-mb--r100">
                <Container>
                    <Row>
                        <Col lg={6} className="space-mb-mobile-only--50">
                            //
                        </Col>
                    </Row>
                </Container>
            </div>
        </LayoutTwo>
    );
};

export default ProductPage;
