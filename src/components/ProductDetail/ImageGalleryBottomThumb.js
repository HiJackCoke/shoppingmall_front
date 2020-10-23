import React, {Fragment, useState, useEffect, useRef} from 'react';
import { LightgalleryItem, LightgalleryProvider } from 'react-lightgallery';
import IdSwiper from "react-id-swiper/lib/ReactIdSwiper.custom";
import { Swiper, Navigation, Pagination} from 'swiper'
import {IoIosHeartEmpty, IoMdExpand} from 'react-icons/io'
import {Tooltip} from 'react-tippy';



const ImageGalleryBottomThumb = ({
 product,
 wishlistItem,
 deleteFromWishlist,
 addToWishlist,
 addToast
}) => {


    const [gallerySwiper, getGallerySwiper] = useState(null)
    const [thumbnailSwiper, getThumbnailSwiper] = useState(null)

    useEffect(() => {
        if (
            gallerySwiper !== null &&
            gallerySwiper.controller &&
            thumbnailSwiper !== null &&
            thumbnailSwiper.controller
        ) {
            gallerySwiper.controller.control = thumbnailSwiper;
            thumbnailSwiper.controller.control = gallerySwiper;
        }
    }, [gallerySwiper, thumbnailSwiper]);

    const gallerySwiperParams = {
        Swiper,
        modules: [ Navigation, Pagination],
        getSwiper: getGallerySwiper,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true
        },
        spaceBetween: 10,
        loopedSlides: 4,
        loop: true,
        effect: 'fade',
    }

    const thumbnailSwiperParams = {
        Swiper,
        modules: [Navigation, Pagination],
        getSwiper: getThumbnailSwiper,
        spaceBetween: 10,
        slidesPerView: 4,
        loopedSlides: 4,
        touchRatio: 0.2,
        freeMode: true,
        loop: true,
        slideToClickedSlide: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    }

    // const gallerySwiperParams = {
    //     getSwiper: getGallerySwiper,
    //     spaceBetween: 10,
    //     loopedSlides: 4,
    //     loop: true,
    //     effect: 'fade',
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true
    //     },
    // };
    //
    // const thumbnailSwiperParams = {
    //     getSwiper: getThumbnailSwiper,
    //     spaceBetween: 10,
    //     slidesPerView: 4,
    //     loopedSlides: 4,
    //     touchRatio: 0.2,
    //     freeMode: true,
    //     loop: true,
    //     slideToClickedSlide: true,
    //     centeredSlides: true,
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev"
    //     },
    // };



    return (
        <Fragment>
            <div className="product-large-image-wrapper space-mb--30">
                {/*floating*/}
                <div className="product-large-image-wrapper__floating-badges">
                    {product.discount && product.discount > 0 ? (
                        <span className="onsale">-{product.discount}%</span>
                    ) : (
                        ""
                    )}
                    {product.new ? <span className="hot">New</span> : ""}
                    {product.stock === 0 ? <span className="out-of-stock">out</span> : ""}
                </div>

                <LightgalleryProvider>
                    <IdSwiper {...gallerySwiperParams}>
                        {product.images && product.images.map((image, i) => {
                            return (
                                <div key={i}>
                                    <LightgalleryItem
                                        group="any"
                                        src={image.url}
                                    >
                                        <Tooltip
                                            title="Click to enlarge"
                                            position="left"
                                            trigger="mouseenter"
                                            animation="shift"
                                            arrow={true}
                                            duration={200}
                                        >
                                            <button className="enlarge-icon">
                                                <IoMdExpand/>
                                            </button>
                                        </Tooltip>
                                    </LightgalleryItem>
                                    <div className="single-image">
                                        <img
                                            src={image.url}
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </IdSwiper>
                </LightgalleryProvider>
            </div>

            {/*//Small Image*/}
            <div className="product-small-image-wrapper">
                <IdSwiper {...thumbnailSwiperParams}>
                    {product.images && product.images.map((image, i) => {
                        return (
                            <div key={i}>
                                <div className="single-image">
                                    <img
                                        src={image.url}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                            </div>
                        )
                    })}
                </IdSwiper>
            </div>
        </Fragment>
    );
};

export default ImageGalleryBottomThumb;
