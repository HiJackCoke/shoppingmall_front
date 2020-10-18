import React, {Fragment, useState} from 'react';

const ProductDescription = ({product, productPrice, discountedPrice, color}) => {

    const [selectedProductColor, setSelectedProductColor] = useState(
        product.variation ? product.variation[0].color : ""
    )

    return (
        <div className="product-content">
            <h2 className="product-content__title space-mb--20">{product.name}</h2>
            <div className="product-content__price space-mb--20">
                {product.discount > 0 ? (
                    <Fragment>
                        <span className="main-price discounted">${product.price}</span>
                        <span className="main-price">${discountedPrice}</span>
                    </Fragment>
                ) : (
                    <span className="main-price"> $ {product.price}</span>
                )}
            </div>
            <div className="product-content__description space-mb--30">
                <p>{product.description}</p>
            </div>


            <div className="product-content__size-color">

                <div className="product-content__color space-mb--20">
                    <div className="product-content__color__title">Color</div>
                    <div className="product-content__color__content">
                        {/*{product.variation && product.variation.map((single, i) => {*/}
                        {/*    return (*/}
                        {/*        <Fragment key={i}>*/}
                        {/*            <input*/}
                        {/*                type="radio"*/}
                        {/*                value={single.color}*/}
                        {/*                name="product-color"*/}
                        {/*                id={single.color}*/}
                        {/*            />*/}
                        {/*            <label*/}
                        {/*                htmlFor={single.color}*/}
                        {/*                style={{backGroundColor: single.color}}*/}
                        {/*            />*/}
                        {/*        </Fragment>*/}
                        {/*    )*/}
                        {/*})}*/}

                        <Fragment>
                            <input
                                type="radio"
                                value={product.color}
                            />
                            <label
                                htmlFor={product}
                            >
                                {product.color}
                            </label>
                        </Fragment>
                    </div>
                </div>

                <div className="product-content__size space-mb--20">
                    <div className="product-content__size__title">Size</div>
                    <div className="product-content__size__content">
                        {/*{product.variation && product.variation.map((single) => {*/}
                        {/*    return single.color === selectedProductColor*/}
                        {/*    ? single.size.map((singleSize, i) => {*/}
                        {/*        return (*/}
                        {/*            <Fragment key={i}>*/}
                        {/*                <input*/}
                        {/*                    type="radio"*/}
                        {/*                    value={singleSize.name}*/}
                        {/*                />*/}
                        {/*                <label htmlFor={singleSize}>*/}
                        {/*                    {singleSize.name}*/}
                        {/*                </label>*/}
                        {/*            </Fragment>*/}
                        {/*        )})*/}
                        {/*    : ""*/}
                        {/*})}*/}


                        <Fragment>
                            <input
                                type="radio"
                                value={product.size}
                            />
                            <label htmlFor={product}>
                                {product.size}
                            </label>
                        </Fragment>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
