import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';
import { IoIosClose, IoIosHeartEmpty } from "react-icons/io";
import { useToasts } from "react-toast-notifications";


import {LayoutTwo} from "../../components/Layout/Layout";
import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";

const Wishlist = () => {
    return (
        <LayoutTwo>
            <BreadCrumb
                backgroundImage={require("../../assets/images/backgrounds/breadcrumb-bg-1.png")}
                title="Wishlist"
            >
                <h1>
                    asfsdf
                </h1>
            </BreadCrumb>
        </LayoutTwo>
    );
};

export default Wishlist;
