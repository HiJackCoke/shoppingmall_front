import React, {Fragment, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {IoIosHeartEmpty} from 'react-icons/io'
import {IoIosCart} from "react-icons/io/index";
import {addToCart} from "../../actions/cartActions";


const ProductDescription = ({
    product,
    productPrice,
    discountedPrice,

    selectItem,
    wishlistItem,
    deleteFromWishlist,
    addToWishlist,
    cartItems,
    addToCart
}) => {

    const [selectedProductColor, setSelectedProductColor] = useState(
        product.attribute ? product.attribute[0].color : ""
    )

    const [temperData, setTemperData] = useState([])

    const [selectedProductSize, setSelectedProductSize] = useState(
        product.attribute ? product.attribute[0].size[0].name : ""
    )

    const [productStock, setProductStock] = useState(
        product.attribute ? product.attribute[0].size[0].stock : product.stock
    )

    const [openOrderBox, setOpenOrderBox] = useState(false)


    const [quantityCount, setQuantityCount] = useState(1)

    const [row, setRow] = useState([])


    if(temperData.productSize) {
        row.push(temperData)
    }



    console.log("row----------------", row)

    useEffect(() => {
        console.log("----------------------------3",temperData)

        if(temperData.productSize) {
            setTemperData(false)
        }

    })

    const handleChange = text => e => {
        setTemperData({...temperData, [text]: e.target.value } )
    }

    const orderBox = (

        <>
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
                        <td>Product Color</td>
                        <td>Product Size</td>
                        <td>Quantity</td>
                        <td>Price</td>
                    </tr>
                    </thead>
                    <tbody>
                        {row.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    {item.productSize ? item.productColor : ""}
                                </td>
                                <td>
                                    {item.productSize}
                                </td>
                                <td>
                                    {item.productSize ? product.price
                                        // <div className="product-content__quantity space-mb--40">
                                        //
                                        //     <div className="cart-plus-minus">
                                        //         <button
                                        //             className="qtybutton"
                                        //             onClick={() => {
                                        //                 setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
                                        //             }}
                                        //         >
                                        //             -
                                        //         </button>
                                        //         <input
                                        //             className="cart-plus-minus-box"
                                        //             type="text"
                                        //             value={quantityCount}
                                        //             readOnly
                                        //         />
                                        //         <button
                                        //             className="qtybutton"
                                        //             onClick={() => {
                                        //                 setQuantityCount(
                                        //                     quantityCount < productStock
                                        //                         ? quantityCount + 1
                                        //                         : quantityCount
                                        //                 )
                                        //             }}
                                        //         >
                                        //             +
                                        //         </button>
                                        //     </div>
                                        // </div>
                                        : ""}
                                </td>
                                <td>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                    {/*<tbody>*/}
                    {/*<tr>*/}
                    {/*    <td>*/}
                    {/*        {selectedProductColor} / {selectedProductSize}*/}
                    {/*    </td>*/}
                    {/*    <td>*/}
                    {/*        {quantityCount}*/}
                    {/*    </td>*/}
                    {/*    <td>{product.price}</td>*/}
                    {/*</tr>*/}
                    {/*</tbody>*/}
                </table>


            </div>
        </>

    )

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
                <p>{product.shortDescription}</p>
            </div>

            <div className="product-content__size-color">
                <div className="product-content__color space-mb--20">
                    <div className="product-content__color__title">Color</div>
                    <div className="product-content__color__content">
                        {product.attribute && product.attribute.map((product, i) => {
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
                                            setQuantityCount(1)
                                            setSelectedProductSize(false)
                                        }}
                                        onClick={handleChange('productColor')}
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

                <div className="product-content__size space-mb--20">
                    <div className="product-content__size__title mt-1 mb-1">Size</div>
                    <div className="product-content__size__content">

                        {product.attribute && product.attribute.map((product) => {
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
                                                    setSelectedProductColor(false)
                                                }}
                                                onClick={handleChange('productSize')}
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

            <Fragment>
                <div className="product-content__quantity space-mb--40">
                    <div className="product-content__quantity__title">Quantity</div>
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

                {openOrderBox === true ? orderBox : null}



                <div className="product-content__button-wrapper d-flex align-items-center">
                    {/*{productStock && productStock > 0 ? (*/}
                    {/*    <button*/}
                    {/*        onClick={() =>*/}
                    {/*            addToCart(*/}
                    {/*                product,*/}
                    {/*                quantityCount,*/}
                    {/*                selectedProductColor,*/}
                    {/*                selectedProductSize*/}
                    {/*            )*/}
                    {/*        }*/}
                    {/*        // disabled={productCartQty >= productStock}*/}
                    {/*        className="lezada-button lezada-button--medium product-content__cart space-mr--10"*/}
                    {/*    >*/}
                    {/*        <IoIosCart/>*/}
                    {/*    </button>*/}
                    {/*) : (*/}
                    {/*    <button*/}
                    {/*        className="lezada-button lezada-button--medium product-content__ofs space-mr--10"*/}
                    {/*        disabled*/}
                    {/*    >*/}
                    {/*        Out of Stock*/}
                    {/*    </button>*/}
                    {/*)}*/}

                    <button
                        className="lezada-button lezada-button--medium space-mr--10"
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

                    {selectedProductSize ? (
                        <button
                            onClick={() =>
                                addToCart(
                                    product,
                                    quantityCount,
                                    selectedProductColor,
                                    selectedProductSize
                                )
                            }
                            // disabled={productCartQty >= productStock}
                            className={`product-content__cart space-mr--10 ${
                                cartItems !== undefined ? "active" : ""
                            }`}
                        >
                            <IoIosCart/>
                        </button>
                    ) : (
                        ""
                    )}

                </div>
            </Fragment>

        </div>
    );
};

export default ProductDescription;
