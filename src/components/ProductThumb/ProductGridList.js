import React, {Fragment, useState} from 'react';
import { Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { IoIosHeartEmpty, IoIosHeart, IoIosCart, IoIosSearch } from 'react-icons/io';

import ProductModal from "./ProductModal";
import {Tooltip} from "react-tippy";

const ProductGridList = ({
    product,
    wishlistItem,
    deleteFromWishlist,
    addToWishlist,
    cartItem,
    deleteFromCart,
    addToCart
}) => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <Fragment>
            <Col lg={3} md={6}>
                <div className="product-grid">

                    {/*Product Image*/}
                    <div className="product-grid__image">
                        <Link
                            to={`/shop/${product.id}`}
                            className="image-wrap"
                        >
                            <img
                                src={product.images[0].url}
                                className="img-fluid"
                                alt={product.name}
                            />
                            {product.images.length > 1 ? (
                                <img
                                    className="img-fluid"
                                    src={product.images[1].url}
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
                            <Tooltip
                                title={
                                    wishlistItem !== undefined
                                        ? "Added to wishlist"
                                        : "Add to wishlist"
                                }
                                position="left"
                                trigger="mouseenter"
                                animation="shift"
                                arrow={true}
                                duration={200}
                            >
                                <button
                                    onClick={
                                        wishlistItem !== undefined
                                            ? () => deleteFromWishlist(product)
                                            : () => addToWishlist(product)
                                    }
                                >
                                    {wishlistItem !== undefined
                                        ? (
                                            <IoIosHeart/>
                                        )
                                        : (
                                            <IoIosHeartEmpty/>
                                        )}
                                </button>
                            </Tooltip>
                            {/*Add to cart*/}
                            <button
                                onClick={cartItem !== undefined
                                ? () => deleteFromCart(product)
                                : () => addToCart(product)
                                }
                            >
                                <IoIosCart />
                            </button>
                            {/*quick view*/}
                            <Tooltip
                                title="Quick view"
                                position="left"
                                trigger="mouseenter"
                                animation="shift"
                                arrow={true}
                                duration={200}
                            >
                                <button
                                    onClick={() => setModalShow(true)}
                                    className="d-none d-lg-block"
                                >
                                    <IoIosSearch/>
                                </button>
                            </Tooltip>
                        </div>
                    </div>

                    {/*Product Content*/}
                    <div className="product-grid__content">
                        <div className="title">
                            <h3>
                                <Link to={`/shop/${product.id}`}>
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
                wishlistItem={wishlistItem}
                addToWishlist={addToWishlist}
                deleteFromWishlist={deleteFromWishlist}
            />
        </Fragment>
    );
};

export default ProductGridList;
