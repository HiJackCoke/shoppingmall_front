import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
import CustomScroll from 'react-custom-scroll';

import {deleteFromWishlist} from "../../../actions/wishlistActions"
import {connect} from 'react-redux';




const WishlistOverlay = ({ activeStatus, getActiveStatus, wishlistItems, deleteFromWishlist }) => {


    return (
        <div className={`wishlist-overlay ${activeStatus ? "active": ""}`}>
            <div
                className="wishlist-overlay__close"
                onClick={() => {
                    getActiveStatus(false);
                    document.querySelector("body").classList.remove("overflow-hidden")
                }}
            />
            <div className="wishlist-overlay__content">
                <button
                    className="wishlist-overlay__close-icon"
                    onClick={() => {
                        getActiveStatus(false);
                        document.querySelector("body").classList.remove('overflow-hidden')
                    }}
                >
                    <IoIosClose />
                </button>
                    {/*offCanvas wishlist content container*/}
                    <div className="wishlist-overlay__content-container">
                        <h3 className="wishlist-title">Wishlist</h3>
                        {wishlistItems.length >= 1 ? (
                            <div className="wishlist-product-wrapper">
                                <div className="wishlist-product-container">
                                    <CustomScroll allowOuterScroll={true}>
                                        {wishlistItems.map((product, i) => {
                                            return (
                                                <div className="single-wishlist-product" key={i}>
                                                    <span className="wishlist-close-icon">
                                                        <button
                                                            onClick={() =>
                                                                deleteFromWishlist(product)
                                                            }
                                                        >
                                                            <IoIosClose />
                                                        </button>
                                                    </span>
                                                    <div className="image">
                                                        <Link
                                                            to={`/shop/${product.id}`}
                                                        >
                                                            <img
                                                                src={product.images[0].url}
                                                                className="img-fluid"
                                                                alt={product.name}
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="content">
                                                        <h5>
                                                            <Link
                                                                to={`/shop/${product.id}`}
                                                            >
                                                                {product.name}
                                                            </Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </CustomScroll>
                                </div>


                                <div className="wishlist-buttons">
                                    <Link
                                        to="/other/wishlist"
                                    >
                                        view wishlist
                                    </Link>
                                </div>
                            </div>
                        ) : "No items"}
                    </div>

            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    wishlistItems : state.wishlistData
})

const mapDispatchToProps = (dispatch) => ({
    deleteFromWishlist: (item) => {
        dispatch(deleteFromWishlist(item))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(WishlistOverlay)
