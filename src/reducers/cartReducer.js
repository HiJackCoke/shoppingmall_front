import { v4 as uuid4 } from 'uuid';
import { ADD_TO_CART, DELETE_FROM_CART, DELETE_ALL_FROM_CART } from '../actions/types'
import {deleteFromCart} from "../actions/cartActions";

const initialState = [];

const cartReducer = (state = initialState, action) => {
    const cartItems = state,
        product = action.payload;

    if(action.type === ADD_TO_CART) {
        if(product.attribute === undefined) {
            const cartItem = cartItems.filter((item) => item.id === product.id)
            if(cartItem === undefined) {
                return [
                    ...cartItems,
                    {
                        ...product,
                        quantity: product.quantity,
                        cartItemId: uuid4()
                    }
                ];
            }
            else {
                return cartItems.map((item) => (
                    item.cartItemId === cartItem.cartItemId
                        ? {
                            ...item,
                            quantity: product.quantity
                                ? item.quantity + product.quantity
                                : item.quantity + 1
                        }
                        : item
                ))
            }
        }

        else {
            const cartItem = cartItems.filter((item) =>
                item.id === product.id &&
                product.selectedProductColor &&
                product.selectedProductColor === item.selectedProductColor &&
                product.selectedProductSize &&
                product.selectedProductSize === item.selectedProductSize &&
                (product.cartItemId ? product.cartItemId === item.cartItemId : true)
            )[0];

            if(cartItem === undefined) {
                return [
                    ...cartItems,
                    {
                        ...product,
                        quantity: product.quantity ? product.quantity : 1,
                        cartItemId: uuid4()
                    }
                ];
            }
            else if (
                cartItem !== undefined &&
                (cartItem.selectedProductColor !== product.selectedProductColor ||
                    cartItem.selectedProductSize !== product.selectedProductSize)
            ) {
                return [
                    ...cartItems,
                    {
                        ...product,
                        quantity: product.quantity ? product.quantity : 1,
                        cartItemId: uuid4()
                    }
                ];
            }
            else {
                return cartItem.map((item) =>
                    item.cartItemId === product.cartItemId
                        ? {
                            ...item,
                            quantity: product.quantity
                                ? item.quantity + product.quantity
                                : item.quantity + 1,
                            selectedProductColor: product.selectedProductColor,
                            selectedProductSize: product.selectedProductSize
                        }
                        : item
                )
            }
        }
    }

    // if(action.type === ADD_TO_CART) {
    //     if(product.attribute === undefined) {
    //         const cartItem = cartItems.filter((item) => item.id === product.id)
    //         if(cartItem === undefined) {
    //             return [
    //                 ...cartItems,
    //                 {
    //                     ...product,
    //                     quantity: product.quantity,
    //                     cartItemId: uuid4()
    //                 }
    //             ];
    //         }
    //         else {
    //             return cartItems.map((item) => (
    //                 item.cartItemId === cartItem.cartItemId
    //                 ? {
    //                     ...item,
    //                     quantity: product.quantity
    //                         ? item.quantity + product.quantity
    //                         : item.quantity + 1
    //                 }
    //                 : item
    //             ))
    //         }
    //     }
    //
    //     else {
    //         const cartItem = cartItems.filter((item) =>
    //             item.id === product.id &&
    //             product.selectedProductColor &&
    //             product.selectedProductColor === item.selectedProductColor &&
    //             product.selectedProductSize &&
    //             product.selectedProductSize === item.selectedProductSize &&
    //             (product.cartItemId ? product.cartItemId === item.cartItemId : true)
    //         )[0];
    //
    //         if(cartItem === undefined) {
    //             return [
    //                 ...cartItems,
    //                 {
    //                     ...product,
    //                     quantity: product.quantity ? product.quantity : 1,
    //                     cartItemId: uuid4()
    //                 }
    //             ];
    //         }
    //         else if (
    //             cartItem !== undefined &&
    //             (cartItem.selectedProductColor !== product.selectedProductColor ||
    //                 cartItem.selectedProductSize !== product.selectedProductSize)
    //         ) {
    //             return [
    //                 ...cartItems,
    //                 {
    //                     ...product,
    //                     quantity: product.quantity ? product.quantity : 1,
    //                     cartItemId: uuid4()
    //                 }
    //             ];
    //         }
    //         else {
    //             return cartItem.map((item) =>
    //                 item.cartItemId === product.cartItemId
    //                 ? {
    //                     ...item,
    //                     quantity: product.quantity
    //                         ? item.quantity + product.quantity
    //                         : item.quantity + 1,
    //                     selectedProductColor: product.selectedProductColor,
    //                     selectedProductSize: product.selectedProductSize
    //                 }
    //                 : item
    //             )
    //         }
    //     }
    // }

    if(action.type === DELETE_FROM_CART) {
        const remainingItems = (cartItems, product) =>
            cartItems.filter((cartItems) => cartItems.cartItemId !== product.cartItemId)
        return remainingItems(cartItems, product)
    }

    return state
}

export default cartReducer;
