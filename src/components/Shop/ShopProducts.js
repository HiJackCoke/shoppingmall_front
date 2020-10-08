import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Row} from 'react-bootstrap';
// import products from "../../products";

import axios from 'axios'

import ProductGridWrapper from "../ProductThumb/ProductGridListWrapper";


const ShopProducts = ({layout}) => {

    const [products, setProducts] = useState([])

    const getData = async () => {
        const {data} = await axios.get('/products')
        setProducts(data)

        console.log(data)
    }
    
    
    useEffect(() => {

        getData()


    }, [])

    return (
        <div className="shop-products">
            <Row className={layout}>
                {products.length}
                {products.map((product) => (
                    <ProductGridWrapper key={product._id} product={product}/>
                ))}
            </Row>
        </div>
    );
};

export default ShopProducts;
