import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import App from './App';
import Register from "./Screens/Register/Register";
import Login from "./Screens/Login/Login";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact render={props => <App {...props}/> } />
            <Route path='/register' exact render={props => <Register{...props}/> } />
            <Route path='/login' exact render={props => <Login {...props}/> } />
            <Redirect to='/' />
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);