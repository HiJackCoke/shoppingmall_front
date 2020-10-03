import React from 'react';
import { Link } from 'react-router-dom';
import {
    IoIosPhonePortrait,
    IoMdMail,
    IoLogoTwitter,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoPinterest,
    IoMdPerson
} from 'react-icons/io';

const MobileMenuWidgets = () => {
    return (
        <div className="offcanvas-mobile-menu__widgets">
            <div className="contact-widget space-mb--30">
                <ul>
                    <li>
                        <IoMdPerson />
                        <Link
                            to="/"
                        >
                            Login / Register
                        </Link>
                    </li>
                    <li>
                        <IoIosPhonePortrait />
                        <Link
                            to="/"
                        >
                            02-0000-0000
                        </Link>
                    </li>
                    <li>
                        <IoMdMail />
                        <Link
                            to="/"
                        >
                            asd@ASD.ASD
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <Link to="/" target="_black">
                    <IoLogoTwitter />
                </Link>
                <Link to="/" target="_black">
                    <IoLogoInstagram />
                </Link>
                <Link to="/" target="_black">
                    <IoLogoFacebook />
                </Link>
                <Link to="/" target="_black">
                    <IoLogoPinterest />
                </Link>
            </div>
        </div>
    );
};

export default MobileMenuWidgets;
