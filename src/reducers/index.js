import {combineReducers} from 'redux'
import wishlistReducer from './wishlistReducer'
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    wishlistData: wishlistReducer,
    cartData: cartReducer,
    authData: authReducer,
    errors: errorReducer,
})
