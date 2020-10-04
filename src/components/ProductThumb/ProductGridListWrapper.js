import React, {Fragment} from 'react';

import ProductGridList from "./ProductGridList";

const ProductGridWrapper = ({product}) => {
    return (
        <Fragment>
            <ProductGridList
                key={product._id}
                product={product}
            />
        </Fragment>
    );
};

export default ProductGridWrapper;
