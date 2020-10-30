import React, { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { IoIosHeartEmpty, IoIosHeart, IoIosSearch } from "react-icons/io";
import { Tooltip } from "react-tippy";
import ProductModal from "./ProductModal";

const HomeGrid = ({
    product,
    discountedPrice,
    productPrice,
    wishlistItem,
    bottomSpace,
    addToWishlist,
    deleteFromWishlist,
    sliderClass
}) => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <Fragment>
            <div
                className={`${bottomSpace ? bottomSpace : ""} ${
                    sliderClass ? sliderClass : ""
                }`}
            >
                <div className="product-grid product-grid--absolute-content">
                    {/*=======  single product image  =======*/}
                    <div className="product-grid__image">
                        <Link
                            to={`/shop/${product.id}`}
                        >
                            <img
                                src={product.images[0].url}
                                className="img-fluid"
                                alt={product.name}
                            />
                            {product.images.length > 1 ? (
                                <img
                                    src={product.images[1].url}
                                    className="img-fluid"
                                    alt={product.name}
                                />
                            ) : (
                                ""
                            )}

                        </Link>
                        <div className="product-grid__floating-badges">
                            {product.discount && product.discount > 0 ? (
                                <span className="onsale">-{product.discount}%</span>
                            ) : (
                                ""
                            )}
                            {product.new ? <span className="hot">New</span> : ""}
                            {product.stock === 0 ? (
                                <span className="out-of-stock">out</span>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="product-grid__floating-icons">
                            {/* add to wishlist */}
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
                                    className={wishlistItem !== undefined ? "active" : ""}
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

                            {/* quick view */}
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
                                    <IoIosSearch />
                                </button>
                            </Tooltip>

                            {/* add to cart */}
                            {/*<button*/}
                            {/*    className="d-none d-lg-block"*/}
                            {/*    onClick={*/}
                            {/*        cartItem !== undefined*/}
                            {/*            ? () => deleteFromCart(product)*/}
                            {/*            : () => addToCart(product)*/}
                            {/*    }*/}
                            {/*>*/}
                            {/*    <IoIosCart/>*/}
                            {/*</button>*/}

                        </div>
                    </div>

                    {/*=======  single product content  =======*/}
                    <div className="product-grid__content">
                        <div className="title">
                            <h3>
                                <Link
                                    to="/"
                                >
                                    {product.name}
                                </Link>
                            </h3>




                        </div>
                        <div className="price">
                            {product.discount > 0 ? (
                                <Fragment>
                                    <span className="main-price discounted">${productPrice}</span>
                                    <span className="discounted-price">${discountedPrice}</span>
                                </Fragment>
                            ) : (
                                <span className="main-price">${productPrice}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* product modal */}
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

export default HomeGrid;
