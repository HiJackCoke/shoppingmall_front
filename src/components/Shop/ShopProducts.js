import React from 'react';
import {Link} from 'react-router-dom';
import {Row} from 'react-bootstrap';
import products from "../../products";

import ProductGridWrapper from "../ProductThumb/ProductGridListWrapper";


const ShopProducts = ({layout}) => {
    return (
        <div className="shop-products">
            <Row className={layout}>
                {products.map((product) => (
                    <ProductGridWrapper key={product._id} product={product}/>
                ))}
            </Row>
        </div>
    );
};

export default ShopProducts;
