import React, {useEffect} from 'react';
import { Link } from'react-router-dom';

const MobileMenuNav = ({ getActiveStatue }) => {



    return (
        <nav
            className="offcanvas-mobile-menu__navigation"
            id="offcanvas-mobile-menu__navigation"
        >
            <ul>
                <li className="menu-item-has-children">
                    <Link to="/">
                        Home
                    </Link>
                    <ul className="mobile-sub-menu">
                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group
                            </Link>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <Link to='/'>
                                        One
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        two
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        three
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group2
                            </Link>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <Link to='/'>
                                        One
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        two
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        three
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group3
                            </Link>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <Link to='/'>
                                        One
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        two
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        three
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group4
                            </Link>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <Link to='/'>
                                        One
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        two
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        three
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>



                <li className="menu-item-has-children">
                    <Link to="/">
                        Shop
                    </Link>
                    <ul className="mobile-sub-menu">
                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group
                            </Link>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <Link to='/'>
                                        One
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        two
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        three
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group2
                            </Link>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <Link to='/'>
                                        One
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        two
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        three
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group3
                            </Link>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <Link to='/'>
                                        One
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        two
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        three
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group4
                            </Link>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <Link to='/'>
                                        One
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        two
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        three
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>


                <li className="menu-item-has-children">
                    <Link to="/">
                        Shop
                    </Link>
                    <ul className="mobile-sub-menu">
                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group
                            </Link>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <Link to='/'>
                                        One
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        two
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        three
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group2
                            </Link>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <Link to='/'>
                                        One
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        two
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        three
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group3
                            </Link>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <Link to='/'>
                                        One
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        two
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        three
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group4
                            </Link>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <Link to='/'>
                                        One
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        two
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        three
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>


                <li className="menu-item-has-children">
                    <Link to="/">
                        Shop
                    </Link>
                    <ul className="mobile-sub-menu">
                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group
                            </Link>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <Link to='/'>
                                        One
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        two
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        three
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group2
                            </Link>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <Link to='/'>
                                        One
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        two
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        three
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group3
                            </Link>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <Link to='/'>
                                        One
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        two
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        three
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="/">
                                Home Group4
                            </Link>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <Link to='/'>
                                        One
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        two
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        three
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default MobileMenuNav;
