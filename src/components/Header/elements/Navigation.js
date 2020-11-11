import React from 'react';
import {Link} from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io'
import img from '../../../assets/images/category-bags.jpg'

const Navigation = () => {
    return (
        <nav className="header-content__navigation space-pr--15 d-none d-lg-block">
            <ul>
                <li>
                    <Link
                        to="/new"
                    >
                        NEW
                    </Link>
                    {/*<IoIosArrowDown />*/}
                    {/*<ul className="sub-menu sub-menu--mega sub-menu--mega--column-5">*/}
                    {/*    <li className="sub-menu--mega__title">*/}
                    {/*        <Link to="/">*/}
                    {/*            OUTER*/}
                    {/*        </Link>*/}
                    {/*        <ul className="sub-menu--mega__list">*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    LONG COAT*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to='/'>*/}
                    {/*                    SHOT COAT*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    JACKET*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </li>*/}

                    {/*    <li className="sub-menu--mega__title">*/}
                    {/*        <Link to="/">*/}
                    {/*            TOP*/}
                    {/*        </Link>*/}
                    {/*        <ul className="sub-menu--mega__list">*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    SHIRT*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to=''>*/}
                    {/*                    SWEATSHIRT*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    KNIT*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </li>*/}

                    {/*    <li className="sub-menu--mega__title">*/}
                    {/*        <Link to="/">*/}
                    {/*            BOTTOM*/}
                    {/*        </Link>*/}
                    {/*        <ul className="sub-menu--mega__list">*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    SLACKS*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to='/'>*/}
                    {/*                    COTTON PANTS*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to='/'>*/}
                    {/*                    DENIM*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </li>*/}
                    {/*    <li className="sub-menu--mega__title">*/}
                    {/*        <Link to="/">*/}
                    {/*            ACC*/}
                    {/*        </Link>*/}
                    {/*        <ul className="sub-menu--mega__list">*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    HAT*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to='/'>*/}
                    {/*                    TIE*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <div className="sub-menu--mega__image">*/}
                    {/*            <img/>*/}
                    {/*        </div>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                </li>

                <li>
                    <Link
                        to="/shop/all"
                    >
                        SHOP
                    </Link>
                    <IoIosArrowDown />

                    <ul className="sub-menu sub-menu--mega sub-menu--mega--column-5">

                        <li className="sub-menu--mega__title">
                            <Link to="/shop/outer/all">
                                OUTER
                            </Link>
                            <Link to="/shop/outer/all">
                                <img
                                    src={img}
                                    alt=""
                                    className="img-fluid"
                                />
                            </Link>

                            {/*<ul className="sub-menu--mega__list">*/}
                            {/*    <li>*/}
                            {/*        <Link to="/">*/}
                            {/*            LONG COAT*/}
                            {/*        </Link>*/}
                            {/*        <img src={img}*/}
                            {/*             className="img-fluid"*/}
                            {/*        />*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to='/'>*/}
                            {/*            SHOT COAT*/}
                            {/*        </Link>*/}
                            {/*        <img/>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to="/">*/}
                            {/*            JACKET*/}
                            {/*        </Link>*/}
                            {/*        <img/>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </li>

                        <li className="sub-menu--mega__title">
                            <Link to="/shop/top/all">
                                TOP
                            </Link>
                            <Link to="/shop/top/all">
                                <img
                                    src={img}
                                    alt=""
                                    className="img-fluid"
                                />
                            </Link>
                            {/*<ul className="sub-menu--mega__list">*/}
                            {/*    <li>*/}
                            {/*        <Link to="/">*/}
                            {/*            SHIRT*/}
                            {/*        </Link>*/}
                            {/*        <img/>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to=''>*/}
                            {/*            SWEATSHIRT*/}
                            {/*        </Link>*/}
                            {/*        <img/>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to="/">*/}
                            {/*            KNIT*/}
                            {/*        </Link>*/}
                            {/*        <img/>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </li>

                        <li className="sub-menu--mega__title">
                            <Link to="/shop/bottom/all">
                                BOTTOM
                            </Link>
                            <Link to="/shop/bottom/all">
                                <img
                                    src={img}
                                    alt=""
                                    className="img-fluid"
                                />
                            </Link>
                            {/*<ul className="sub-menu--mega__list">*/}
                            {/*    <li>*/}
                            {/*        <Link to="/">*/}
                            {/*            SLACKS*/}
                            {/*        </Link>*/}
                            {/*        <img/>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to='/'>*/}
                            {/*            COTTON PANTS*/}
                            {/*        </Link>*/}
                            {/*        <img/>*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        <Link to='/'>*/}
                            {/*            DENIM*/}
                            {/*        </Link>*/}
                            {/*        <img/>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </li>
                        <li className="sub-menu--mega__title">
                            COMING SOON
                        </li>
                        {/*<li className="sub-menu--mega__title">*/}
                        {/*    <Link to="/">*/}
                        {/*        ACC*/}
                        {/*    </Link>*/}
                        {/*    <ul className="sub-menu--mega__list">*/}
                        {/*        <li>*/}
                        {/*            <Link to="/">*/}
                        {/*                HAT*/}
                        {/*            </Link>*/}
                        {/*            <img/>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <Link to='/'>*/}
                        {/*                TIE*/}
                        {/*            </Link>*/}
                        {/*            <img/>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <div className="sub-menu--mega__image">*/}
                        {/*        <img/>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                    </ul>
                </li>

                <li>
                    <Link
                        to="/coming"
                    >
                        LOOK BOOK
                    </Link>
                    {/*<IoIosArrowDown />*/}
                    {/*<ul className="sub-menu sub-menu--mega sub-menu--mega--column-5">*/}
                    {/*    <li className="sub-menu--mega__title">*/}
                    {/*        <Link to="/">*/}
                    {/*            Home Group*/}
                    {/*        </Link>*/}
                    {/*        <ul className="sub-menu--mega__list">*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    Decor*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to='/'>*/}
                    {/*                    Creative*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    prefumes*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </li>*/}
                    {/*    <li className="sub-menu--mega__title">*/}
                    {/*        <Link to="/">*/}
                    {/*            Home Group*/}
                    {/*        </Link>*/}
                    {/*        <ul className="sub-menu--mega__list">*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    trending*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to=''>*/}
                    {/*                    essentials*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    accessories*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </li>*/}
                    {/*    <li className="sub-menu--mega__title">*/}
                    {/*        <Link to="/">*/}
                    {/*            Home Group*/}
                    {/*        </Link>*/}
                    {/*        <ul className="sub-menu--mega__list">*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    LookBook*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to='/'>*/}
                    {/*                    Furniture*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    Smart Design*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </li>*/}
                    {/*    <li className="sub-menu--mega__title">*/}
                    {/*        <Link to="/">*/}
                    {/*            Home Group*/}
                    {/*        </Link>*/}
                    {/*        <ul className="sub-menu--mega__list">*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    Collection*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to='/'>*/}
                    {/*                    Collection2*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    Collection3*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <div className="sub-menu--mega__image">*/}
                    {/*            <img/>*/}
                    {/*        </div>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                </li>

                <li>
                    <Link
                        to="/sale"
                    >
                        SALE
                    </Link>
                    {/*<IoIosArrowDown />*/}
                    {/*<ul className="sub-menu sub-menu--mega sub-menu--mega--column-5">*/}
                    {/*    <li className="sub-menu--mega__title">*/}
                    {/*        <Link to="/">*/}
                    {/*            Home Group*/}
                    {/*        </Link>*/}
                    {/*        <ul className="sub-menu--mega__list">*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    Decor*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to='/'>*/}
                    {/*                    Creative*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    prefumes*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </li>*/}
                    {/*    <li className="sub-menu--mega__title">*/}
                    {/*        <Link to="/">*/}
                    {/*            Home Group*/}
                    {/*        </Link>*/}
                    {/*        <ul className="sub-menu--mega__list">*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    trending*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to=''>*/}
                    {/*                    essentials*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    accessories*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </li>*/}
                    {/*    <li className="sub-menu--mega__title">*/}
                    {/*        <Link to="/">*/}
                    {/*            Home Group*/}
                    {/*        </Link>*/}
                    {/*        <ul className="sub-menu--mega__list">*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    LookBook*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to='/'>*/}
                    {/*                    Furniture*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    Smart Design*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </li>*/}
                    {/*    <li className="sub-menu--mega__title">*/}
                    {/*        <Link to="/">*/}
                    {/*            Home Group*/}
                    {/*        </Link>*/}
                    {/*        <ul className="sub-menu--mega__list">*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    Collection*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to='/'>*/}
                    {/*                    Collection2*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to="/">*/}
                    {/*                    Collection3*/}
                    {/*                </Link>*/}
                    {/*                <img/>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <div className="sub-menu--mega__image">*/}
                    {/*            <img/>*/}
                    {/*        </div>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
