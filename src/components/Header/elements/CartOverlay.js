import React from 'react';
import {Link} from 'react-router-dom'
import { IoIosClose } from "react-icons/io";
import CustomScroll from "react-custom-scroll";


const CartOverlay = ({
    activeStatus,
    getActiveStatus,
    cartItems,
    deleteFromCart
}) => {

    let cartTotalPrice = 0;

    return (
        <div className={`cart-overlay ${activeStatus ? "active" : ""}`}>
            <div
                className="cart-overlay__close"
                onClick={() => {
                    getActiveStatus(false);
                    document.querySelector("body").classList.remove("overflow-hidden")
                }}
            />
            <div className="cart-overlay__content">
                <button
                    className="cart-overlay__close-icon"
                    onClick={() => {
                        getActiveStatus(false);
                        document.querySelector("body").classList.remove('overflow-hidden')
                    }}
                >
                    <IoIosClose />
                </button>
                <div className="cart-overlay__content-container">
                    <h3 className="cart-title">
                        Cart
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default CartOverlay;
