import {combineReducers} from 'redux'
import wishlistReducer from './wishlistReducer'


export default combineReducers({
    wishlistData: wishlistReducer,
})
