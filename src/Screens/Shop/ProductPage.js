import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

import {LayoutTwo} from '../../components/Layout/Layout'
import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
import products from "../../products";
import {ImageGalleryBottomThumb, ProductDescription} from "../../components/ProductDetail";


const ProductPage = ({
                         match,
                         wishlistItem,
                         addToWishlist,
                         deleteFromWishlist,
                         addToast
}) => {

    const product = products.find((p) => p._id === match.params.id)

    return (
        <LayoutTwo>
            <BreadCrumb
                title={product.name}
                backgroundImage={require("../../assets/images/backgrounds/breadcrumb-bg-1.png")}
            />

            <div className="product-details space-mt--r100 space-mb--r100">
                <Container>
                    <Row>
                        <Col lg={6} className="space-mb-mobile-only--50">
                            <ImageGalleryBottomThumb
                                product={product}
                                wishlistItem={wishlistItem}
                                addToWishlist={addToWishlist}
                                deleteFromWishlist={deleteFromWishlist}
                                addToast={addToast}
                            />
                        </Col>

                        <Col lg={6}>
                            <ProductDescription
                                product={product}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </LayoutTwo>
    );
};

export default ProductPage;
