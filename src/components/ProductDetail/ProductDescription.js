import React, {Fragment, useState} from 'react';

const ProductDescription = ({product, productPrice, discountedPrice, color}) => {


    return (
        <div>
            <h2 className="product-content__title space-mb--20">{product.name}</h2>
            <div className="product-content__price space-mb--20">
                {product.discount > 0 ? (
                    <Fragment>
                        <span>${product.price}</span>
                        <span>${discountedPrice}</span>
                    </Fragment>
                ) : (
                    <span className="main-price">{product.price}</span>
                )}
            </div>
            <div className="product-content__description space-mb--30">
                <p>{product.shortDescription}</p>
            </div>

            <div className="product-content__size-color">
                <div className="product-content__size space-mb--20">
                    <div className="product-content__size__title">Size</div>
                    <div className="product-content__size__content">
                        {/*{product.variation && product.variation.map((single) => {*/}
                        {/*    return single.color === "red"*/}
                        {/*    ? single.size.map((singleSize, i) => {*/}
                        {/*        return (*/}
                        {/*            <Fragment key={i}>*/}
                        {/*                <input*/}
                        {/*                    type="radio"*/}
                        {/*                    value={singleSize.name}*/}
                        {/*                />*/}
                        {/*            </Fragment>*/}
                        {/*        )})*/}
                        {/*    : ""*/}
                        {/*})}*/}
                        {product.variation &&
                            product.variation.color === "red"
                            ? <Fragment>
                                <input
                                    type="radio"
                                    value={product.variation.size}
                                />
                                <label htmlFor={product.variation.size}>
                                    {product.variation.size}
                                </label>
                            </Fragment>
                            : ""
                        }
                    </div>
                </div>

                <div className="product-content__color space-mb--20">
                    <div className="product-content__color__title">Color</div>
                    <div className="product-content__color__content">
                        {product.vari}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
