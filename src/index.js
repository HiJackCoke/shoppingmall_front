import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import App from './App';
import Register from "./Screens/Register/Register";
import Login from "./Screens/Login/Login";
import ShopAll from "./Screens/Shop/ShopAll";
import ProductPage from "./Screens/Shop/ProductPage";


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact render={props => <App {...props}/> } />
            <Route path='/register' exact render={props => <Register{...props}/> } />
            <Route path='/login' exact render={props => <Login {...props}/> } />
            <Route path='/shop/all' render={props => <ShopAll{...props}/> } />
            <Route path='/shop/:id' render={props => <ProductPage{...props}/> } />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
