import React, {Fragment, useEffect, useState} from 'react';
import {connect} from 'react-redux'

import ProductGridList from "./ProductGridList";
import {addToWishlist, deleteFromWishlist} from '../../actions/wishlistActions'



const ProductGridWrapper = ({
    products,
    wishlistItems,
    addToWishlist,
    deleteFromWishlist,
    cartItem,
    deleteFromCart,
    addToCart
}) => {
    // const wishlistItem = wishlistItems.filter(
    //     (wishlistItem) => wishlistItem.id === product.id
    // )[0];

    return (
        <Fragment>
            {products && products.map((product) => {
                const wishlistItem = wishlistItems.filter(
                    (wishlistItem) => wishlistItem.id === product.id
                )[0];
                return (
                    <ProductGridList
                        key={product.id}
                        product={product}
                        wishlistItem={wishlistItem}
                        addToWishlist={addToWishlist}
                        deleteFromWishlist={deleteFromWishlist}
                        cartItem={cartItem}
                        addToCart={addToCart}
                        deleteFromCart={deleteFromCart}
                    />
                )
            })}
        </Fragment>



        // <Fragment>
        //     <ProductGridList
        //         key={product.id}
        //         product={product}
        //         wishlistItem={wishlistItem}
        //         addToWishlist={addToWishlist}
        //         deleteFromWishlist={deleteFromWishlist}
        //         cartItem={cartItem}
        //         addToCart={addToCart}
        //         deleteFromCart={deleteFromCart}
        //     />
        // </Fragment>
    );
};


const mapStateToProps = (state) => ({
    wishlistItems: state.wishlistData
})

const mapDispatchToProps = (dispatch) => ({
    addToWishlist: (item) => {
        dispatch(addToWishlist(item))
    },
    deleteFromWishlist: (item) => {
        dispatch(deleteFromWishlist(item))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductGridWrapper)

