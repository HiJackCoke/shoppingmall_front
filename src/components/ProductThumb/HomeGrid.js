import React, { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { IoIosHeartEmpty, IoIosCart, IoIosSearch } from "react-icons/io";
import { Tooltip } from "react-tippy";
import ProductModal from "./ProductModal";

const HomeGrid = ({
                             product,
                             discountedPrice,
                             productPrice,
                             cartItem,
                             wishlistItem,
                             compareItem,
                             bottomSpace,
                             addToCart,
                             addToWishlist,
                             deleteFromWishlist,
                             addToCompare,
                             deleteFromCompare,
                             addToast,
                             cartItems,
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
                            className="image-wrap"
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
                                            ? () => deleteFromWishlist(product, addToast)
                                            : () => addToWishlist(product, addToast)
                                    }
                                    className={wishlistItem !== undefined ? "active" : ""}
                                >
                                    <IoIosHeartEmpty />
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
                            <button className="d-none d-lg-block">
                                <IoIosCart/>
                            </button>

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
                // discountedprice={discountedPrice}
                // productprice={productPrice}
                // cartitems={cartItems}
                // cartitem={cartItem}
                // wishlistitem={wishlistItem}
                // compareitem={compareItem}
                // addtocart={addToCart}
                // addtowishlist={addToWishlist}
                // deletefromwishlist={deleteFromWishlist}
                // addtocompare={addToCompare}
                // deletefromcompare={deleteFromCompare}
                // addtoast={addToast}
            />
        </Fragment>
    );
};

export default HomeGrid;
