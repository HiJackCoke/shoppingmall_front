import React, {Fragment, useEffect, useState} from 'react';
import {connect} from 'react-redux'

import ProductGridList from "./ProductGridList";
import {addToWishlist, deleteFromWishlist} from '../../actions/wishlistActions'



const ProductGridWrapper = ({
    product,
    wishlistItems,
    addToWishlist,
    deleteFromWishlist
}) => {
    const wishlistItem = wishlistItems.filter(
        (wishlistItems) => wishlistItems.id === product.id
    )[0];

    return (
        <Fragment>
            <ProductGridList
                key={product.id}
                product={product}
                wishlistItem={wishlistItem}
                addToWishlist={addToWishlist}
                deleteFromWishlist={deleteFromWishlist}
            />
        </Fragment>
    );
};


const mapStateToProps = (state) => ({
    wishlistItems: state.wishlistItems
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

