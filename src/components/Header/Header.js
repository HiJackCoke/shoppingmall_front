import React, {useState, useEffect, Fragment} from 'react';
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {
    IoIosSearch,
    IoMdPerson,
    IoIosHeartEmpty,
    IoIosCart,
    IoIosMenu
} from 'react-icons/io';
import Navigation from "./elements/Navigation";
import SearchOverlay from "./elements/SearchOverlay";
import WishlistOverlay from "./elements/WishlistOverlay";
import CartOverlay from "./elements/CartOverlay";
import MobileMenu from "./elements/MobileMenu";



const Header = ({ aboutOverlay, cartItems, wishlistItems}) => {


    const [scroll, setScroll] = useState();
    const [headerTop, setHeaderTop] = useState();
    const [headerHeight, setHeaderHeight] = useState();
    const [offCanvasSearchActive, setOffCanvasSearchActive] = useState(false);
    const [offCanvasWishlistActive, setOffCanvasWishlistActive] = useState(false);
    const [offCanvasCartActive, setOffCanvasCartActive] = useState(false);
    const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] = useState(false);

    useEffect( () => {
        const header = document.querySelector("header");
        setHeaderTop(header.offsetTop);
        setHeaderHeight(header.offsetHeight);
        window.addEventListener("scroll", handleScroll);
        scroll > headerTop
        ? (document.body.style.paddingTop = `${headerHeight}px`)
        : (document.body.style.padding = 0);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [headerTop ,headerHeight, scroll]);

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    return (
        <Fragment>
            <header
                className={`topbar-shadow transparent-style white-content ${
                    scroll > headerTop ? "is-sticky" : ""
                }`}
            >
                <Container className="wide">
                    <div className="header-content d-flex align-items-center justify-content-between position-relative space-py-mobile-only--30">
                        {/* logo */}
                        <div className="header-content__logo d-flex align-items-center space-pr--15">
                            <Link
                                to="/"
                            >
                                <img
                                    src={require("../../assets/images/logo.png")}
                                    className="img-fluid dark-logo"
                                    alt=""
                                />
                                <img
                                    src={require("../../assets/images/logo-white.png")}
                                    className="img-fluid white-logo"
                                    alt=""
                                />
                            </Link>
                        </div>

                        {/* navigation */}
                        <Navigation />

                        {/* icons */}
                        <div className="header-content__icons space-pl--15">
                            <ul className="d-none d-lg-block">
                                <li>
                                    <button
                                        onClick={() => {
                                            setOffCanvasSearchActive(true);
                                            document
                                                .querySelector("body")
                                                .classList.add("overflow-hidden")
                                        }}
                                    >
                                        <IoIosSearch />
                                    </button>
                                </li>
                                <li>
                                    {localStorage.jwtToken ? (
                                       <Link
                                        to="/"
                                       >
                                           <h1>My</h1>
                                       </Link>
                                    ) : (
                                        <Link
                                            to="/register"
                                        >
                                            <IoMdPerson />
                                        </Link>
                                    )}

                                </li>


                                <li>
                                    <button
                                        onClick={() => {
                                            setOffCanvasWishlistActive(true);
                                            document
                                                .querySelector("body")
                                                .classList.add('overflow-hidden')
                                        }}
                                    >
                                        <IoIosHeartEmpty />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            setOffCanvasCartActive(true);
                                            document
                                                .querySelector("body")
                                                .classList.add('overflow-hidden')
                                        }}
                                    >
                                        <IoIosCart />
                                    </button>
                                </li>
                            </ul>

                            {/*Mobile*/}
                            <ul className="d-block d-lg-none">
                                <li>
                                    <Link
                                        to="/"
                                    >
                                        <IoIosHeartEmpty />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                    >
                                        <IoIosCart />
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setOffCanvasMobileMenuActive(true)}
                                    >
                                        <IoIosMenu />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </header>

            {/*{search overlay}*/}
            <SearchOverlay
                activeStatus={offCanvasSearchActive}
                getActiveStatus={setOffCanvasSearchActive}
            />

            {/*wishlist overlay*/}
            <WishlistOverlay
                activeStatus={offCanvasWishlistActive}
                getActiveStatus={setOffCanvasWishlistActive}
            />

            {/*cart overlay*/}
            <CartOverlay
                activeStatus={offCanvasCartActive}
                getActiveStatus={setOffCanvasCartActive}
            />

            {/*mobile menu*/}
            <MobileMenu
                activeStatus={offCanvasMobileMenuActive}
                getActiveStatus={setOffCanvasMobileMenuActive}
            />
        </Fragment>
    );
};

export default Header;
