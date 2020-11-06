import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';

import Swiper from 'react-id-swiper'



import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
import {LayoutTwo} from "../../components/Layout/Layout";
import ShopHeader from "../../components/Shop/ShopHeader";
import ShopProducts from "../../components/Shop/ShopProducts";
import axios from "axios";


const ShopAll = ({products}) => {

    const [layout, setLayout] = useState("grid four-column");
    // const [products, setProducts] = useState([])
    //
    // const getData = async () => {
    //     const {data} = await axios.get('/products')
    //     setProducts(data)
    //
    //     console.log(data)
    // }
    //
    //
    // useEffect(() => {
    //
    //     getData()
    //
    //
    // }, [])


    return (
        <LayoutTwo>
            <BreadCrumb
                backgroundImage={require("../../assets/images/backgrounds/breadcrumb-bg-1.png")}
                title="ALL"
            >
                {/*<ul className="breadcrumb__list">*/}
                {/*    <li>*/}
                {/*        <Link to='/'>*/}
                {/*            home*/}
                {/*        </Link>*/}
                {/*    </li>*/}

                {/*    <li>*/}
                {/*        ALL Product*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </BreadCrumb>

            <div className="shop-page-content">
                <ShopHeader/>

                <div className="shop-page-content__body space-mt--r130 space-mb--r130">
                    <Container className="wide">
                        <Row>
                            <Col>
                                <ShopProducts
                                    products={products}
                                    layout={layout}
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </LayoutTwo>
    );
};

export default ShopAll;
