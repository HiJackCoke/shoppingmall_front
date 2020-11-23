import axios from 'axios';
import {SET_CURRENT_USER} from './types'
import jwt_decoded from 'jwt-decode';
import setAuthToken from "../utills/setAuthToken";





export const registerUser = (userData, history) => dispatch => {

    dispatch({
        type: SET_CURRENT_USER
    })
    axios
        .post('/auth/local/register', userData)
        .then(res => {
            history.push('/login')
        })
        .catch(err => {
            console.log(err)
        })
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const loginUser = userData => dispatch => {

    dispatch({
        type: SET_CURRENT_USER
    })

    axios
        .post('/auth/local', userData)
        .then(res => {

            console.log('sdsdsd', res)

            const {jwt} = res.data;

            localStorage.setItem('jwtToken', jwt)

            setAuthToken(jwt)

            const decoded = jwt_decoded(jwt)

            dispatch(setCurrentUser(decoded))



        })
        .catch(err => {
           console.log(err)
        })
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false)
    dispatch(setCurrentUser({}))
}


