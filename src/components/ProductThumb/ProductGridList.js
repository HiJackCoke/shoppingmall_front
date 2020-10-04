import React, {Fragment, useState} from 'react';
import { Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { IoIosHeartEmpty, IoIosCart, IoIosSearch } from 'react-icons/io';

import ProductModal from "./ProductModal";

const ProductGridList = ({
    product,
    wishlistItem,
    deleteFromWishlist,
    addToWishlist
}) => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <Fragment>
            <Col lg={3} md={6}>
                <div className="product-grid">

                    {/*Product Image*/}
                    <div className="product-grid__image">
                        <Link
                            to={`/shop/${product._id}`}
                            className="image-wrap"
                        >
                            <img
                                src={product.image}
                                className="img-fluid"
                                alt={product.name}
                            />
                            {product.image.length > 1 ? (
                                <img
                                    className="img-fluid"
                                    src={product.image[1]}
                                    alt={product.name}
                                />
                            ) : (
                                ""
                            )}
                        </Link>
                        <div className="product-grid__floating-badges">
                            {product.new ? <span className="hot">New</span> : ""}
                            {product.stock === 0 ? (
                                <span className="out-of-stock">OUT</span>
                            ) : (
                                ""
                            )}
                        </div>

                        <div className="product-grid__floating-icons">
                            {/*wishlist*/}
                            <button
                                className={wishlistItem !== undefined ? "active" : ""}
                                onClick={
                                    wishlistItem !== undefined
                                        ? () => deleteFromWishlist(product)
                                        : () => addToWishlist(product)
                                }
                            >
                                <IoIosHeartEmpty/>
                            </button>
                            {/*Add to cart*/}
                            <button>
                                <IoIosCart />
                            </button>
                            {/*quick view*/}
                            <button
                                onClick={() => setModalShow(true)}
                                className="d-none d-lg-block"
                            >
                                <IoIosSearch/>
                            </button>
                        </div>
                    </div>

                    {/*Product Content*/}
                    <div className="product-grid__content">
                        <div className="title">
                            <h3>
                                <Link to={`/shop/${product._id}`}>
                                    {product.name}
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
            </Col>
            <ProductModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                product={product}
            />
        </Fragment>
    );
};

export default ProductGridList;
