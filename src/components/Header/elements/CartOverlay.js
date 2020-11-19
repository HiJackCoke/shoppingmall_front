import React from 'react';
import {Link} from 'react-router-dom'
import { IoIosClose } from "react-icons/io";
import CustomScroll from "react-custom-scroll";
import {connect} from 'react-redux';
import {deleteFromCart} from "../../../actions/cartActions";


const CartOverlay = ({
    activeStatus,
    getActiveStatus,
    cartItems,
    deleteFromCart
}) => {

    // let cartTotalPrice = 0;

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
                    {cartItems.length >= 1 ? (
                        <div className="cart-product-wrapper">
                            <div className="cart-product-container">
                                <CustomScroll allowOuterScroll={true}>
                                    {cartItems.map((product, i) => {
                                        return (
                                            <div className="single-cart-product" key={i}>
                                                <span className="cart-close-icon">
                                                    <button
                                                        onClick={() => deleteFromCart(product)}
                                                    >
                                                        <IoIosClose/>
                                                    </button>
                                                </span>
                                                <div className="image">
                                                    <Link to={`/shop/${product.id}`}>
                                                        <img
                                                            src={product.images[0].url}
                                                            className="img-fluid"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="content">

                                                    <h5>
                                                        <Link to={`/shop/${product.id}`}>
                                                            {product.name}
                                                        </Link>
                                                    </h5>

                                                    {product.selectedProductColor &&
                                                    product.selectedProductSize ? (
                                                        <div className="cart-item-variation">
                                                            <span>
                                                                Color : {product.selectedProductColor}
                                                            </span>
                                                            <span>
                                                                Size : {product.selectedProductSize}
                                                            </span>
                                                            <span>
                                                                Quantity : {product.quantity}
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}


                                                </div>
                                            </div>
                                        )
                                    })}
                                </CustomScroll>
                            </div>
                            <p className="cart-subtotal">
                                <span className="subtotal-title">
                                    Subtotal
                                </span>
                                <span className='subtotal-amount'>
                                    subtotal amount
                                </span>
                            </p>

                            <div className="cart-buttons">
                                <Link
                                    to="/order/cart"
                                >
                                    View Cart
                                </Link>
                                <Link>
                                    Check Out
                                </Link>
                            </div>
                        </div>
                    ) : (
                        "No Items"
                    )}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cartData
})

const mapDispatchToProps = (dispatch) => ({
    deleteFromCart: (item) => {
        dispatch(deleteFromCart(item))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);
