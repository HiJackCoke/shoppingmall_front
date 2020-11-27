import React, {useState, useEffect, Fragment} from 'react';
import {Modal, Container, Button} from 'react-bootstrap'
import {Link, withRouter} from 'react-router-dom'
import {connect} from'react-redux'
import {logoutUser} from '../../actions/authActions'
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
import ModalHeader from "reactstrap/es/ModalHeader";



const HeaderTwo = ({ cartItems, wishlistItems, logoutUser, history }) => {


    const [scroll, setScroll] = useState();
    const [headerTop, setHeaderTop] = useState();
    const [headerHeight, setHeaderHeight] = useState();
    const [offCanvasSearchActive, setOffCanvasSearchActive] = useState(false);
    const [offCanvasWishlistActive, setOffCanvasWishlistActive] = useState(false);
    const [offCanvasCartActive, setOffCanvasCartActive] = useState(false);
    const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] = useState(false);

    const [modal, setModal] = useState(false)
    const [logout, setLogout] = useState(false)

    useEffect(() => {
        const header = document.querySelector("header");
        setHeaderTop(header.offsetTop);
        setHeaderHeight(header.offsetHeight);
        window.addEventListener("scroll", handleScroll);
        scroll > headerTop
            ? (document.body.style.paddingTop = `${headerHeight}px`)
            : (document.body.style.paddingTop = 0);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [headerTop ,headerHeight, scroll]);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleSubmit = e => {
        e.preventDefault()

        if(logout === true) {
            logoutUser()

            history.push('/')
        }

    }

    return (
        <Fragment>
            <header
                className={`topbar-shadow ${
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
                                        <div
                                            className="header-content__navigation d-none d-lg-block"
                                            style={{
                                                width:"20px"
                                            }}
                                        >
                                            <ul>
                                                <li>
                                                    <Link to="/mypage">
                                                        <IoMdPerson/>
                                                    </Link>
                                                    <ul
                                                        className="sub-menu"
                                                        style={{
                                                            display:"flex",
                                                            flexDirection: "Column",
                                                            borderRadius: "3px",
                                                            backgroundColor: "transparent"
                                                        }}
                                                    >
                                                        <li className="sub-menu--mega__title">
                                                            <form onSubmit={handleSubmit}>
                                                                <Link
                                                                    to='/mypage'
                                                                >
                                                                    <button
                                                                        style={{fontSize: "x-large"}}
                                                                    >
                                                                        Profile
                                                                    </button>
                                                                </Link>

                                                            </form>
                                                        </li>

                                                        <li className="sub-menu--mega__title">
                                                            <button
                                                                style={{fontSize: "x-large"}}
                                                                onClick={() => setModal(true)}
                                                            >
                                                                Log Out
                                                            </button>
                                                            <Modal
                                                                show={modal}
                                                            >
                                                                <Modal.Header
                                                                    closeButton
                                                                    onHide={() => setModal(false)}
                                                                >

                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <label>
                                                                        Do u wanna Log Out?
                                                                    </label>
                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                    <form onSubmit={handleSubmit}>
                                                                        <Button
                                                                            type="submit"
                                                                            className="lezada-button lezada-button--small"
                                                                            onClick={() =>
                                                                                setLogout(true)}
                                                                        >
                                                                            YES
                                                                        </Button>{' '}
                                                                        <Button
                                                                            className="lezada-button lezada-button--small"
                                                                            onClick={() => setModal(false)}
                                                                        >
                                                                            NO
                                                                        </Button>
                                                                    </form>

                                                                </Modal.Footer>
                                                            </Modal>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>

                                        </div>
                                    ) : (
                                        <Link
                                            to="/login"
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
                                        {wishlistItems.length >= 1 ? (
                                            <span className="count">
                                                {wishlistItems.length ? wishlistItems.length : ""}
                                            </span>
                                        ) : (
                                            ""
                                        )}
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
                                        {cartItems.length >=1 ? (
                                            <span className="count">
                                                {cartItems.length ? cartItems.length : ""}
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                    </button>
                                </li>
                            </ul>

                            {/*Mobile*/}
                            <ul className="d-block d-lg-none">
                                <li>
                                    <Link
                                        to="/order/wishlist"
                                        as={'/order/wishlist'}
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

const mapStateToProps = (state) =>({
    wishlistItems: state.wishlistData,
    cartItems: state.cartData,
    auth: state.authData,
    errors: state.errors
})


export default connect(mapStateToProps, {logoutUser})(withRouter(HeaderTwo));
