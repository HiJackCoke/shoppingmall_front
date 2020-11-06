import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';

import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
import {LayoutTwo} from "../../components/Layout/Layout";
import ShopHeader from "../../components/Shop/ShopHeader";
import ShopProducts from "../../components/Shop/ShopProducts";

import img from '../../assets/images/category/banner-bestseller-2.jpg'


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

                <div
                    className="text-center mt-5"
                >

                    <ul className="sub-menu--mega__category">
                        <li>
                            <Link
                                className='mr-5'
                                to="/shop/outer/"
                            >
                                OUTER
                            </Link>
                            <img src={img}/>
                        </li>

                        <li>
                            <Link
                                className='mr-5'
                                to="/shop/outer/short"
                            >
                                TOP
                            </Link>
                            <img src={img}/>
                        </li>

                        <li>
                            <Link
                                className='mr-5'
                                to="/shop/outer/jacket"
                            >
                                BOTTOM
                            </Link>
                            <img src={img}/>
                        </li>

                        <li>
                            <Link
                                to="/shop/outer/jacket"
                            >
                                ACC
                            </Link>
                            <img src={img}/>
                        </li>
                    </ul>
                </div>

                <div className="shop-page-content__body space-mt--r100 space-mb--r130">
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
