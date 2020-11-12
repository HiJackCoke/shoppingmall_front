import cookie from 'js-cookie';


export const setCookie = (key, value) => {
    if(window !== 'undefined') {
        cookie.set(key, value, {
            expires : 7
        })
    }
}

// Auth enticate user by passing data to cookie and localstorage during signin
export const authenticate = (response, next) => {
    console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE', response);
    setCookie('token', response.data.token);
    setLocalStorage('user', response.data.user);
    next();
};

const removeCookie = key => {
    if(window !== 'undefined') {
        cookie.remove(key, {
            expires: 7
        })
    }
}


export const setLocalStorage =  (key, value) => {
    if(window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export const removeLocalStorage = (key) => {
    if(window !== 'undefined') {
        localStorage.removeItem(key)
    }
}


export const getCookie = key => {
    if(window !== 'undefined') {
        return cookie.get(key)
    }
}

export const isAuth = () => {
    if(window !== 'undefined') {
        const cookieChecked = getCookie('token')
        if(cookieChecked) {
            return JSON.parse(localStorage.getItem('user'))
            // parse == parshing
        }
        else {
            return false

        }
    }
}

