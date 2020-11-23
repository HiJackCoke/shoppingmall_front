import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import {connect} from 'react-redux';


import {LayoutTwo} from '../../components/Layout/Layout'
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {ImageGalleryBottomThumb, ProductDescription} from "../../components/ProductDetail";
import {addToWishlist, deleteFromWishlist} from '../../actions/wishlistActions';
import {addToCart, deleteFromCart} from '../../actions/cartActions';


const ProductPage = ({
                         wishlistItems,
                         cartItems,
                         addToWishlist,
                         deleteFromWishlist,
                         addToCart
}) => {
    useEffect(() => {
        document.querySelector('body').classList.remove("overflow-hidden")
    })

    const {id} = useParams();

    const [product, setProduct] = useState({})


    const wishlistItem = wishlistItems.filter(
        (wishlistItem) => wishlistItem.id === product.id)[0]

    const cartItem = cartItems.filter(
        (cartItem) => cartItem.id === product.id)[0]

    const getData = async () => {
        const {data} = await axios.get(`/products/${id}`)
        setProduct(data)
    }

    useEffect(() => {
        getData()
    })




    // const product = products.find((p) => p._id === match.params.id)

    return (
        <LayoutTwo>

            <Breadcrumb
                title={product.name}
                backgroundImage={require("../../assets/images/backgrounds/breadcrumb-bg-1.png")}

            />


            <div className="product-details space-mt--r100 space-mb--r100">
                <Container>
                    <Row>
                        <Col lg={6} className="space-mb-mobile-only--50">
                            <ImageGalleryBottomThumb
                                product={product}
                            />
                        </Col>

                        <Col lg={6}>
                            <ProductDescription
                                product={product}
                                wishlistItem={wishlistItem}
                                cartItem={cartItem}
                                addToWishlist={addToWishlist}
                                deleteFromWishlist={deleteFromWishlist}
                                addToCart={addToCart}
                            />
                        </Col>

                    </Row>
                </Container>
            </div>

        </LayoutTwo>
    );
};

const mapStateToProps = (state) => ({
    wishlistItems: state.wishlistData,
    cartItems: state.cartData
})

const mapDispatchToProps = (dispatch) => ({
    addToWishlist: (item) => {
        dispatch(addToWishlist(item))
    },
    deleteFromWishlist: (item) => {
        dispatch(deleteFromWishlist(item))
    },
    addToCart: (item, quantityCount, selectedProductColor, selectedProductSize) => {
        dispatch(addToCart(item, quantityCount, selectedProductColor, selectedProductSize))
    },
    deleteFromCart: (item) => {
        dispatch(deleteFromCart(item))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
