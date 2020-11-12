import axios from 'axios';
import {GET_ERRORS, SET_CURRENT_USER} from './types'
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
        .catch(err => (
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            })
        ))
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

            const {token} = res.data;


            localStorage.setItem('jwtToken', token)

            setAuthToken(token)

            const decoded = jwt_decoded(token)

            dispatch(setCurrentUser(decoded))



        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        })
}

