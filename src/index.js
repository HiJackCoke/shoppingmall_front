import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { persistStore } from 'redux-persist'

import App from './App';


import Register from "./Screens/Register/Register";
import Login from "./Screens/Login/Login";

import ShopAll from "./Screens/Shop/ShopAll";
import OuterAll from "./Screens/Shop/Outer/OuterAll";
import OuterLong from "./Screens/Shop/Outer/OuterLong";
import OuterShort from "./Screens/Shop/Outer/OuterShort";
import OuterJacket from "./Screens/Shop/Outer/OuterJacket";

import TopAll from "./Screens/Shop/Top/TopAll";
import TopT from "./Screens/Shop/Top/TopT";
import TopShirt from "./Screens/Shop/Top/TopShirt";
import TopKnit from "./Screens/Shop/Top/TopKnit";

import BottomAll from "./Screens/Shop/Bottom/BottomAll";
import BottomSlacks from "./Screens/Shop/Bottom/BottomSlacks";
import BottomCotton from "./Screens/Shop/Bottom/BottomCotton";
import BottomDenim from "./Screens/Shop/Bottom/BottomDenim";

import ProductPage from "./Screens/Shop/ProductPage";

import ComingSoon from "./Screens/LookBook/ComingSoon";

import About from "./Screens/Info/About";
import Location from "./Screens/Info/Location";
import Policy from "./Screens/Info/Policy";
import Agreement from "./Screens/Info/Agreement";

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
                    <Route path='/shop/outer/all' render={props => <OuterAll {...props}/> } />
                    <Route path='/shop/outer/long' render={props => <OuterLong {...props}/> } />
                    <Route path='/shop/outer/short' render={props => <OuterShort{...props}/> } />
                    <Route path='/shop/outer/jacket' render={props => <OuterJacket {...props}/> } />


                    <Route path='/shop/top/all' render={props => <TopAll {...props}/> } />
                    <Route path='/shop/top/t' render={props => <TopT {...props}/> } />
                    <Route path='/shop/top/shirt' render={props => <TopShirt {...props}/> } />
                    <Route path='/shop/top/knit' render={props => <TopKnit {...props}/> } />


                    <Route path='/shop/bottom/all' render={props => <BottomAll {...props}/> } />
                    <Route path='/shop/bottom/slacks' render={props => <BottomSlacks {...props}/> } />
                    <Route path='/shop/bottom/cotton' render={props => <BottomCotton {...props}/> } />
                    <Route path='/shop/bottom/denim' render={props => <BottomDenim {...props}/> } />


                    <Route path='/coming' render={props => <ComingSoon{...props}/> } />


                    <Route path='/shop/:id' render={props => <ProductPage{...props}/> } />


                    <Route path='/info/about' render={props => <About {...props}/> }/>
                    <Route path='/info/location' render={props => <Location{...props}/> } />
                    <Route path='/info/policy' render={props => <Policy {...props}/> } />
                    <Route path='/info/agreement' render={props => <Agreement{...props}/> } />

                    <Route path='/order/wishlist' render={props => <Wishlist{...props} /> } />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
  document.getElementById('root')
);
