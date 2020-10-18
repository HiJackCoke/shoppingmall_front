import React, {Fragment, useEffect, useState} from 'react';

import ProductGridList from "./ProductGridList";



export const ProductGridWrapper = ({product}) => {
    return (
        <Fragment>
            <ProductGridList
                key={product.id}
                product={product}
            />
        </Fragment>
    );
};


