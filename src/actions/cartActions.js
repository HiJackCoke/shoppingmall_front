import {ADD_TO_CART, DELETE_FROM_CART, DELETE_ALL_FROM_CART, DECREASE_QUANTITY} from './types'



export const addToCart = (
    item, quantityCount, selectedProductColor, selectedProductSize
) => {
    return dispatch => {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                ...item,
                quantity: quantityCount,
                selectedProductColor: selectedProductColor
                    ? selectedProductColor
                    : item.selectedProductColor
                    ? item.selectedProductColor
                    : null,
                selectedProductSize: selectedProductSize
                    ? selectedProductSize
                    : item.selectedProductSize
                    ? item.selectedProductSize
                    : null
            }
        })
    }
};

export const deleteFromCart = (item) => {
    return dispatch => {
        dispatch({ type: DELETE_FROM_CART, payload: item})
    }
};

export const deleteAllFromCart = () => {
    return dispatch => {
        dispatch({ type: DELETE_ALL_FROM_CART })
    }
};

export const  decreaseQuantity = (item) => {
    return dispatch => {
        dispatch({ type: DECREASE_QUANTITY , payload: item})
    }
}
