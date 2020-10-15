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
//
// const mapStateToProps = (state) => {
//     return {
//         cartItems: state.cartData,
//         wishlistItems: state.wishlistData,
//         compareItems: state.compareData
//     };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToCart: (
//             item,
//             addToast,
//             quantityCount,
//             selectedProductColor,
//             selectedProductSize
//         ) => {
//             dispatch(
//                 addToCart(
//                     item,
//                     addToast,
//                     quantityCount,
//                     selectedProductColor,
//                     selectedProductSize
//                 )
//             );
//         },
//         addToWishlist: (item, addToast) => {
//             dispatch(addToWishlist(item, addToast));
//         },
//         deleteFromWishlist: (item, addToast) => {
//             dispatch(deleteFromWishlist(item, addToast));
//         },
//         addToCompare: (item, addToast) => {
//             dispatch(addToCompare(item, addToast));
//         },
//         deleteFromCompare: (item, addToast) => {
//             dispatch(deleteFromCompare(item, addToast));
//         }
//     };
// };

export default HomeGridWrapper
