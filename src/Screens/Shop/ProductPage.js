import React, {useState,useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';

import {LayoutTwo} from '../../components/Layout/Layout'
import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
// import products from "../../products";
import {ImageGalleryBottomThumb, ProductDescription} from "../../components/ProductDetail";


const ProductPage = ({
                         wishlistItem,
                         addToWishlist,
                         deleteFromWishlist,
                         addToast
}) => {

    const {id} = useParams();

    const [product, setProduct] = useState({})

    const getData = async () => {
        const {data} = await axios.get(`/products/${id}`)
        console.log("---------------------", `http://localhost:1337${data.images[0].url}`)
        setProduct(data)
    //
    //     console.log(data)
    }



    useEffect(() => {
        getData()
    }, {})


    // const product = products.find((p) => p._id === match.params.id)

    return (
        <LayoutTwo>

            <BreadCrumb

                title={product.name}
                backgroundImage={product.images}

            />


            <div className="product-details space-mt--r100 space-mb--r100">
                <Container>
                    <Row>
                        <Col lg={6} className="space-mb-mobile-only--50">
                            {}
                            <ImageGalleryBottomThumb
                                product={product}
                                wishlistItem={wishlistItem}
                                addToWishlist={addToWishlist}
                                deleteFromWishlist={deleteFromWishlist}
                                addToast={addToast}
                            />
                        </Col>

                        <Col lg={6}>
                            <ProductDescription
                                product={product}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </LayoutTwo>
    );
};

export default ProductPage;
