import {ADD_TO_WISHLIST, DELETE_ALL_FROM_WISHLIST, DELETE_FROM_WISHLIST}from './types'



export const addToWishlist = (item) => {
    return dispatch => {
        dispatch({type: ADD_TO_WISHLIST, payload: item})
    }
}

// delete from wishlist
export const deleteFromWishlist = (item) => {
    return dispatch => {
        dispatch({ type: DELETE_FROM_WISHLIST, payload: item });
    };
};

//delete all from wishlist
export const deleteAllFromWishlist = () => {
    return dispatch => {
        dispatch({ type: DELETE_ALL_FROM_WISHLIST });
    };
};
