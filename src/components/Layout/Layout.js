import React from 'react';
import Header from "../Header/Header";
import HeaderTwo from "../Header/HeaderTwo";
import Footer from "../Footer/Footer";


export const Layout = ({children}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export const LayoutTwo = ({children}) => {
    return (
        <div>
            <HeaderTwo />
            {children}
            <Footer />
        </div>
    )
}
