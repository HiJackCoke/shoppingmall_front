import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import Swiper from "react-id-swiper";
import CustomScroll from "react-custom-scroll";

const ProductModal = (props) => {

    const {
        product
    } = props;

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            className="product-quickview"
            centered
        >
            <Modal.Body>
                <Modal.Header colseButton/>
                <div className="product-quickview__image-wrapper">
                    <Swiper>
                        {/*{product.image && product.image.map((single, key) => {*/}
                        {/*    return (*/}
                        {/*        <div key={key}>*/}
                        {/*            <div className="single-image">*/}
                        {/*                <img*/}
                        {/*                    src={single}*/}
                        {/*                    className="img-fluid"*/}
                        {/*                    alt=""*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    )*/}
                        {/*})}*/}
                    </Swiper>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ProductModal;
