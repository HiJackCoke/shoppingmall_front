import React, {Fragment, useEffect, useState} from 'react';

import ProductGridList from "./ProductGridList";
import Swiper from "react-id-swiper";
import axios from "axios";


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


