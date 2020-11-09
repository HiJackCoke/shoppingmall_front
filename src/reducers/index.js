import {combineReducers} from 'redux'
import wishlistReducer from './wishlistReducer'
import cartReducer from "./cartReducer";


export default combineReducers({
    wishlistData: wishlistReducer,
    cartData: cartReducer
})
