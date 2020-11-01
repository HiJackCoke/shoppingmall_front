import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { persistStore } from 'redux-persist'

import App from './App';


import Register from "./Screens/Register/Register";
import Login from "./Screens/Login/Login";
import ShopAll from "./Screens/Shop/ShopAll";
import ProductPage from "./Screens/Shop/ProductPage";
import Wishlist from "./Screens/Wishlist/Wishlist";
import {Provider} from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import store from './store'

const persist = persistStore(store)


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact render={props => <App {...props}/> } />
                    <Route path='/register' exact render={props => <Register{...props}/> } />
                    <Route path='/login' exact render={props => <Login {...props}/> } />
                    <Route path='/shop/all' render={props => <ShopAll{...props}/> } />
                    <Route path='/shop/:id' render={props => <ProductPage{...props}/> } />
                    <Route path='/order/wishlist' render={props => <Wishlist{...props} /> } />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
  document.getElementById('root')
);
