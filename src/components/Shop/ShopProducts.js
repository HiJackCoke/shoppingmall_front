import React, {useEffect, useState} from 'react';
import {Row} from 'react-bootstrap';
// import products from "../../products";

import axios from 'axios'

import ProductGridWrapper from "../ProductThumb/ProductGridListWrapper";


const ShopProducts = ({layout}) => {

    const [products, setProducts] = useState([])

    const getData = async () => {
        const {data} = await axios.get('/products')
        setProducts(data)
    };

    useEffect(() => {
        getData()
    },[getData()])

    return (
        <div className="shop-products">
            <Row className={layout}>
                <ProductGridWrapper key={products.id} products={products}/>
            </Row>
        </div>
    );
};

export default ShopProducts;
