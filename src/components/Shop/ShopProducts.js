import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Row} from 'react-bootstrap';
// import products from "../../products";

import axios from 'axios'

import {ProductGridWrapper} from "../ProductThumb/ProductGridListWrapper";


const ShopProducts = ({layout, products}) => {



    return (
        <div className="shop-products">
            <Row className={layout}>
                {products.map((product) => (
                    <ProductGridWrapper key={product.id} product={product}/>
                ))}
            </Row>
        </div>
    );
};

export default ShopProducts;
