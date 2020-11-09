import React, { Fragment } from "react";
import {connect} from 'react-redux'

import {addToWishlist, deleteFromWishlist} from '../../actions/wishlistActions'
import {addToCart} from "../../actions/cartActions";


import HomeGrid from "./HomeGrid";

const HomeGridWrapper = ({
    products,
    bottomSpace,
    addToWishlist,
    deleteFromWishlist,
    wishlistItems,
    sliderClass,
    deleteFromCart,
    addToCart
}) => {
    return (
        <Fragment>
            {products && products.map((product) => {

                const wishlistItem = wishlistItems.filter(
                    (wishlistItem) => wishlistItem.id === product.id
                )[0];


                return (
                    <HomeGrid
                        key={product.id}
                        product={product}
                        // discountedPrice={discountedPrice}
                        // productPrice={productPrice}
                        wishlistItem={wishlistItem}
                        // compareItem={compareItem}
                        bottomSpace={bottomSpace}
                        addToCart={addToCart}
                        addToWishlist={addToWishlist}
                        deleteFromWishlist={deleteFromWishlist}
                        sliderClass={sliderClass}
                    />
                )
            })}
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    wishlistItems: state.wishlistData,
    cartItems: state.cartData
})

const mapDispatchToProps = (dispatch) => ({
    addToWishlist: (item) => {
        dispatch(addToWishlist(item))
    },
    deleteFromWishlist: (item) => {
        dispatch(deleteFromWishlist(item))
    },
    addToCart: (item, quantityCount, selectedProductColor, selectedProductSize) => {
        dispatch(addToCart(item, quantityCount, selectedProductColor, selectedProductSize))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeGridWrapper);
