import React, {Fragment, useState} from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import Swiper from "react-id-swiper";
import CustomScroll from "react-custom-scroll";
import {IoIosCart, IoIosHeartEmpty} from "react-icons/io/index";

const ProductModal = (props) => {

    const {
        product,
        wishlistItem,
        addToWishlist,
        deleteFromWishlist
    } = props;

    const gallerySwiperParams = {
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    };

    const [selectedProductColor, setSelectedProductColor] = useState(
        product.attribute ? product.attribute[0].color : ""
    )

    const [selectedProductSize, setSelectedProductSize] = useState(
        product.attribute ? product.attribute[0].size[0].name : ""
    )

    const [productStock, setProductStock] = useState(
        product.attribute ? product.attribute[0].size[0].stock : product.stock
    )

    const [openOrderBox, setOpenOrderBox] = useState(false)


    const [quantityCount, setQuantityCount] = useState(1)

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            className="product-quickview"
            centered
        >
            <Modal.Body>
                <Modal.Header closeButton></Modal.Header>
                <div className="product-quickview__image-wrapper">
                    <Swiper {...gallerySwiperParams}>
                        {product.images && product.images.map((image, i) => {
                            return (
                                <div key={i}>
                                    <div className="single-image">
                                        <img
                                            src={image.url}
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </Swiper>
                </div>
                <Row>
                    <Col md={7} sm={12} className="ml-auto">
                        <CustomScroll>
                            <div className="product-quickview__content">
                                <h2 className="product-quickview__title space-mb--20">
                                    {product.name}
                                </h2>
                                <div className="product-quickview__price space-mb--20">
                                    <span className="main-price">
                                        {product.price}
                                    </span>
                                </div>
                                <div className="product-quickview__description space-mb--30">
                                    <p>{product.shortDescription}</p>
                                </div>

                                {product.attribute ? (
                                    <div className="product-quickview__size-color">
                                        <div className="product-quickview__color space-mb--20">
                                            <div className="product-quickview__color__title">
                                                Color
                                            </div>
                                            <div className="product-quickview__color__content">
                                                {product.attribute.map((product, i) => {
                                                    return (
                                                        <Fragment key={i}>
                                                            <input
                                                                type="radio"
                                                                value={product.color}
                                                                name="product-color"
                                                                id={product.color}
                                                                checked={
                                                                    product.color === selectedProductColor ? "checked" : ""
                                                                }
                                                                onChange={() => {
                                                                    setSelectedProductColor(product.color);
                                                                }}
                                                            />
                                                            <label
                                                                htmlFor={product.color}
                                                                style={{backgroundColor: product.colorCode}}
                                                            />
                                                        </Fragment>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div className="product-quickview__size-color">
                                            <div className="product-quickview__size space-mb--20">
                                                <div className="product-quickview__size__title">
                                                    Size
                                                </div>
                                                <div className="product-quickview__size__content">
                                                    {product.attribute.map((product) => {
                                                        return product.color === selectedProductColor
                                                        ? product.size.map((productSize, i) => {
                                                            return (
                                                                <Fragment key={i}>
                                                                    <input
                                                                        type="radio"
                                                                        value={productSize.name}
                                                                        checked={
                                                                            productSize.name === selectedProductSize
                                                                                ? "checked"
                                                                                : ""
                                                                        }
                                                                        id={productSize.name}
                                                                        onChange={() => {
                                                                            setSelectedProductSize(productSize.name)
                                                                            setProductStock(productSize.stock)
                                                                            setQuantityCount(1)
                                                                            setOpenOrderBox(true)
                                                                        }}
                                                                    />
                                                                    <label htmlFor={productSize.name}>
                                                                        {productSize.name}
                                                                    </label>
                                                                </Fragment>
                                                            )
                                                        })
                                                        : ""
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                                <Fragment>
                                    <div className="product-quickview__quantity space-mb--20">
                                        <div className="product-quickview__quantity__title">
                                            Quantity
                                        </div>
                                        <div className="cart-plus-minus">
                                            <button
                                                className="qtybutton"
                                                onClick={() => {
                                                    setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
                                                }}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="cart-plus-minus-box"
                                                type="text"
                                                value={quantityCount}
                                                readOnly
                                            />
                                            <button
                                                className="qtybutton"
                                                onClick={() => {
                                                    setQuantityCount(
                                                        quantityCount < productStock
                                                            ? quantityCount + 1
                                                            : quantityCount
                                                    )
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {openOrderBox === true ?
                                        <div>
                                            <table
                                                style={{
                                                    borderTop: "groove",
                                                    backgroundColor: "whitesmoke",
                                                    color: "black",
                                                    letterSpacing: "1px",
                                                    margin: "20px 0px 30px",
                                                    width: "100%",
                                                    textAlign: "center",
                                                    lineHeight: "2.5"
                                                }}
                                            >
                                                <thead
                                                    style={{
                                                        backgroundColor:"white",
                                                        display: "table-header-group",
                                                    }}
                                                >
                                                <tr>
                                                    <td>Product Info</td>
                                                    <td>Quantity</td>
                                                    <td>Price</td>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                <tr>
                                                    <td>{selectedProductColor} / {selectedProductSize}</td>
                                                    <td>
                                                        {quantityCount}
                                                    </td>
                                                    <td>{product.price}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div> : ""
                                    }
                                    <div className="product-content__button-wrapper d-flex align-items-center">
                                        <button
                                            className="lezada-button lezada-button--medium product-content__cart space-mr--10"
                                        >
                                            Buy Now
                                        </button>

                                        <button
                                            className={`product-content__wishlist space-mr--10 ${
                                                wishlistItem !== undefined ? "active" : ""
                                            }`}
                                            onClick={
                                                wishlistItem !== undefined
                                                    ? () => deleteFromWishlist(product)
                                                    : () => addToWishlist(product)
                                            }
                                        >
                                            <IoIosHeartEmpty />
                                        </button>
                                        <button className="product-content__wishlist space-mr--10">
                                            <IoIosCart/>
                                        </button>
                                    </div>
                                </Fragment>
                            </div>
                        </CustomScroll>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default ProductModal;
