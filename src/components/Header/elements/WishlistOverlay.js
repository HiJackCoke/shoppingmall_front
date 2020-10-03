import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
import CustomScroll from 'react-custom-scroll';




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
                    </div>

            </div>
        </div>
    );
};


export default WishlistOverlay;
