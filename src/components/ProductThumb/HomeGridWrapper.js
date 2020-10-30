import React, { Fragment } from "react";
import {connect} from 'react-redux'

import {addToWishlist, deleteFromWishlist} from '../../actions/wishlistActions'

import HomeGrid from "./HomeGrid";

const HomeGridWrapper = ({
    product,
    bottomSpace,
    addToCart,
    addToWishlist,
    deleteFromWishlist,
    addToCompare,
    deleteFromCompare,
    cartItems,
    wishlistItems,
    compareItems,
    sliderClass
}) => {
    const wishlistItem = wishlistItems.filter(
        (wishlistItems) => wishlistItems.id === product.id
    )[0];

    return (
        <Fragment>
            <HomeGrid
                key={product.id}
                product={product}
                // discountedPrice={discountedPrice}
                // productPrice={productPrice}
                // cartItem={cartItem}
                wishlistItem={wishlistItem}
                // compareItem={compareItem}
                bottomSpace={bottomSpace}
                // addToCart={addToCart}
                addToWishlist={addToWishlist}
                deleteFromWishlist={deleteFromWishlist}
                // addToCompare={addToCompare}
                // deleteFromCompare={deleteFromCompare}
                // addToast={addToast}
                // cartItems={cartItems}
                sliderClass={sliderClass}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeGridWrapper);
