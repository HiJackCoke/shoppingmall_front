import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { IoIosClose } from "react-icons/io";

import {LayoutTwo} from "../../components/Layout/Layout";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {addToCart, deleteFromCart, deleteAllFromCart, decreaseQuantity } from '../../actions/cartActions';


const Cart = ({ cartItems, addToCart, deleteFromCart, deleteAllFromCart, decreaseQuantity }) => {

    // const [quantityCount] = useState(1);
    let cartTotalPrice = 0;

    useEffect(() => {
        document.querySelector("body").classList.remove("overflow-hidden")
    })

    return (
        <LayoutTwo>
            <Breadcrumb
                title="Cart"
                backgroundImage={require("../../assets/images/backgrounds/breadcrumb-bg-1.png")}
            />
            <div className="cart-content space-mt--r130 space-mb--r130">
                <Container>
                    {cartItems && cartItems.length >= 1 ? (
                        <Row>
                            <Col lg={12}>
                                <table
                                    className="cart-table"
                                    style={{tableLayout: "fixed"}}
                                >
                                    <thead>
                                        <tr>
                                            <th className="product-name" colSpan={2}>
                                                Product
                                            </th>
                                            <th className="product-price">
                                                Price
                                            </th>
                                            <th className="product-quantity">
                                                Quantity
                                            </th>
                                            <th className="product-subtotal">
                                                Total
                                            </th>
                                            <th className="product-remove">
                                                &nbsp;
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((product, i) => {

                                            cartTotalPrice += product.price * product.quantity
                                            return (
                                                <tr key={i}>
                                                    <td className="product-thumbnail">
                                                        <Link to={`/shop/${product.id}`}>
                                                            <img
                                                                className="img-fluid"
                                                                src={product.images[0].url}
                                                                alt=""
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">
                                                        <Link to={`/shop/${product.id}`}>
                                                            {product.selectedProductColor &&
                                                            product.selectedProductSize ? (
                                                                <div className="product-variation">
                                                                    <span>
                                                                        Color : {product.selectedProductColor}
                                                                    </span>
                                                                    <span>
                                                                        Size : {product.selectedProductSize}
                                                                    </span>
                                                                </div>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </Link>
                                                    </td>
                                                    <td className="product-price">
                                                        <span>
                                                             <span className="price">${product.price}</span>
                                                        </span>
                                                    </td>
                                                    <td className="product-quantity">
                                                        <div className="cart-plus-minus">
                                                            <button
                                                                className="dec qtybutton"
                                                                onClick={() => {
                                                                    decreaseQuantity(product)
                                                                }}
                                                            >
                                                                -
                                                            </button>
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                type="text"
                                                                value={product.quantity}
                                                                readOnly
                                                            />
                                                            <button
                                                                className="inc qtybutton"
                                                                onClick={() => {
                                                                    addToCart(product)
                                                                }}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="total-price">
                                                         <span className="price">
                                                            ${(product.price * product.quantity)}
                                                        </span>
                                                    </td>
                                                    <td className="product-remove">
                                                        <button
                                                            onClick={() => {
                                                                deleteFromCart(product)
                                                            }}
                                                        >
                                                            <IoIosClose />
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </Col>
                            <Col lg={12} className="space-mb--r100">
                                <div className="cart-coupon-area space-pt--30 space-pb--30">
                                    <Row className="align-items-center">
                                        <Col lg={5} className="text-center text-lg-right ml-auto">
                                            <button
                                                className="lezada-button lezada-button--medium"
                                                onClick={() => deleteAllFromCart()}
                                            >
                                                clear cart
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={5} className="ml-auto">
                                <div className="cart-calculation-area">
                                    <h2 className='space-mb--40'>
                                        Cart Totals
                                    </h2>
                                    <table className="cart-calculation-table space-mb--40">
                                         <tbody>
                                            <tr>
                                                <th>SUBTOTAL</th>
                                                <td className="subtotal">
                                                    ${cartTotalPrice}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>TOTAL</th>
                                                <td className="total">${cartTotalPrice}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="cart-calculation-button text-center">
                                        <Link
                                            to="/"
                                            className="lezada-button lezada-button--medium"
                                        >
                                            proceed to checkout
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    ) : (
                        ""
                    )}
                </Container>
            </div>
        </LayoutTwo>
    );
};


const mapStateToProps = (state) => ({
    cartItems: state.cartData
})

const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => {
        dispatch(addToCart(item))
    },
    deleteFromCart: (item) => {
        dispatch(deleteFromCart(item))
    },
    deleteAllFromCart: () => {
        dispatch(deleteAllFromCart())
    },
    decreaseQuantity: (item) => {
        dispatch(decreaseQuantity(item))
    }
})

export default connect (mapStateToProps, mapDispatchToProps)(Cart);
