import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {IoIosHeartEmpty} from 'react-icons/io'
import {IoIosCart} from "react-icons/io/index";


const ProductDescription = ({product, productPrice, discountedPrice, color}) => {

    const [selectedProductColor, setSelectedProductColor] = useState(
        product ? product.color : ""
    )

    const [selectedProductSize, setSelectedProductSize] = useState(
        product ? product.size : ""
    )

    const [productStock, setProductStock] = useState(
        product ? product.stock : "stock"
    )




    const [quantityCount, setQuantityCount] = useState(1)

    const orderMinusCount = (number) => {
        if(quantityCount >= 1) {
            setQuantityCount(quantityCount - 1)
        }

    }

    const orderPlusCount = (number, stockCount) => {
        if(quantityCount >= stockCount) {
            setQuantityCount(stockCount)
        }
        else {
            setQuantityCount(quantityCount + 1)
        }
    }

    console.log(product)

    return (
        <div className="product-content">
            <h2 className="product-content__title space-mb--20">{product.name}</h2>
            <div className="product-content__price space-mb--20">
                {product.discount > 0 ? (
                    <Fragment>
                        <span className="main-price discounted">${product.price}</span>
                        <span className="main-price">${discountedPrice}</span>
                    </Fragment>
                ) : (
                    <span className="main-price"> $ {product.price}</span>
                )}
            </div>
            <div className="product-content__description space-mb--30">
                <p>{product.description}</p>
            </div>


            <div className="product-content__size-color">

                <div className="product-content__color space-mb--20">
                    <div className="product-content__color__title">Color</div>
                    <div className="product-content__color__content">
                        {/*{product.variation && product.variation.map((single, i) => {*/}
                        {/*    return (*/}
                        {/*        <Fragment key={i}>*/}
                        {/*            <input*/}
                        {/*                type="radio"*/}
                        {/*                value={single.color}*/}
                        {/*                name="product-color"*/}
                        {/*                id={single.color}*/}
                        {/*            />*/}
                        {/*            <label*/}
                        {/*                htmlFor={single.color}*/}
                        {/*                style={{backGroundColor: single.color}}*/}
                        {/*            />*/}
                        {/*        </Fragment>*/}
                        {/*    )*/}
                        {/*})}*/}

                        <Fragment>
                            <input
                                type="radio"
                                value={product.color}
                                name="product-color"
                                id={product.color}
                                checked={
                                    product.color === selectedProductColor ? "checked" : ""
                                }
                                onChange={() => {
                                    setSelectedProductColor(product.color)
                                    setSelectedProductSize(product.size)
                                    setProductStock(product.stock)
                                    setQuantityCount(1)
                                }}
                            />
                            <label
                                htmlFor={product}
                            >

                            </label>
                        </Fragment>
                    </div>
                </div>

                <div className="product-content__size space-mb--20">
                    <div className="product-content__size__title">Size</div>
                    <div className="product-content__size__content">
                        {/*{product.variation && product.variation.map((single) => {*/}
                        {/*    return single.color === selectedProductColor*/}
                        {/*    ? single.size.map((singleSize, i) => {*/}
                        {/*        return (*/}
                        {/*            <Fragment key={i}>*/}
                        {/*                <input*/}
                        {/*                    type="radio"*/}
                        {/*                    value={singleSize.name}*/}
                        {/*                />*/}
                        {/*                <label htmlFor={singleSize}>*/}
                        {/*                    {singleSize.name}*/}
                        {/*                </label>*/}
                        {/*            </Fragment>*/}
                        {/*        )})*/}
                        {/*    : ""*/}
                        {/*})}*/}


                        <Fragment>
                            <input
                                type="radio"
                                value={product.size}
                                checked={
                                    product.size === selectedProductSize
                                        ? "checked"
                                        : ""
                                }
                                id={product.size}
                                onChange={() => {
                                    setSelectedProductSize(product.size)
                                    setProductStock(product.stock)
                                    setQuantityCount(1)
                                }}
                            />
                            <label htmlFor={product}>
                                {product.size}
                            </label>
                        </Fragment>

                    </div>
                </div>
            </div>

            <Fragment>
                <div className="product-content__quantity space-mb--40">
                    <div className="product-content__quantity__title">Quantity</div>
                    <div className="cart-plus-minus">
                        <button
                            className="qtybutton"
                            onClick={() => orderMinusCount(setQuantityCount)}
                            // onClick={() => {
                            //     setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
                            // }}
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
                            onClick={() => orderPlusCount(setQuantityCount, product.stock)}


                                // setQuantityCount(
                                //     quantityCount + 1
                                //     quanti      onClick={() => orderCount(setQuantityCount)}tyCount < productStock
                                //         ? quantityCount + 1
                                //         : quantityCount
                                // )
                        >
                            +
                        </button>
                    </div>
                </div>

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
                                <td>{product.name} / {product.size}</td>
                                <td>1</td>
                                <td>{product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="product-content__button-wrapper d-flex align-items-center">
                    <button
                        className="lezada-button lezada-button--medium product-content__cart space-mr--10"
                    >
                        Buy Now
                    </button>
                    <button className="product-content__wishlist space-mr--10">
                        <IoIosHeartEmpty />
                    </button>
                    <button className="product-content__wishlist space-mr--10">
                        <IoIosCart/>
                    </button>
                </div>
            </Fragment>
        </div>
    );
};

export default ProductDescription;
