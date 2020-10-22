import React, {useState, useEffect, Fragment} from 'react';
import Swiper from "react-id-swiper";
import 'pure-react-carousel/dist/react-carousel.es.css';

import { Container, Row, Col } from "react-bootstrap";

import HomeGridWrapper from "../ProductThumb/HomeGridWrapper";
import SectionTitle from "../SectionTitle/SectionTitle";


const HomeNewSlider = ({spaceBottomClass, products}) => {

    const params = {
        slidesPerView: 5,
        spaceBetween: 20,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            1024: {
                slidesPerView: 5
            },
            768: {
                slidesPerView: 3
            },
            640: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1
            }
        }
    };


    return (
    <div className="product-slider-wrapper space-mb--r100">
        <Container>
            <SectionTitle
                title="New Itemssss"
            />
        </Container>
        <div className="product-slider-container product-slider-container--style2">
            {products.length > 0 ?
                <Swiper{...params}>
                    {products.map((product) => (
                        <HomeGridWrapper
                            key={product.id}
                            product={product}
                            sliderClass="swiper-slide"
                            bottomSpace="space-mb--50"
                        />
                    ))}
                </Swiper> : false
            }

        </div>
    </div>



    // <div
    //     className="swiper-container swiper-container-horizontal swiper-container-free-mode"
    // >
    //     <Swiper{...params}>
    //         <div
    //             className="swiper-wrapper"
    //         >
    //             {products.map((product) => (
    //                 <ProductGridWrapper key={product.id} product={product}/>
    //             ))}
    //         </div>
    //     </Swiper>
    // </div>
    )
}


export default HomeNewSlider;
