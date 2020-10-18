import React, { Fragment } from "react";


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
    return (
        <Fragment>

            <HomeGrid
                key={product.id}
                product={product}
                // discountedPrice={discountedPrice}
                // productPrice={productPrice}
                // cartItem={cartItem}
                // wishlistItem={wishlistItem}
                // compareItem={compareItem}
                // bottomSpace={bottomSpace}
                // addToCart={addToCart}
                // addToWishlist={addToWishlist}
                // deleteFromWishlist={deleteFromWishlist}
                // addToCompare={addToCompare}
                // deleteFromCompare={deleteFromCompare}
                // addToast={addToast}
                // cartItems={cartItems}
                sliderClass={sliderClass}
            />

        </Fragment>
    );
};

export default HomeGridWrapper
