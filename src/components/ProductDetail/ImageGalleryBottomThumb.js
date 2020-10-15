import React, {Fragment, useState, useEffect} from 'react';
import { LightgalleryItem, LightgalleryProvider } from 'react-lightgallery';
import Swiper from "react-id-swiper";
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
        getSwiper: getGallerySwiper,
        spaceBetween: 10,
        loopedSlides: 4,
        loop: true,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
    };

    const thumbnailSwiperParams = {
        getSwiper: getThumbnailSwiper,
        slidesPerView: 4,
        loopedSlides: 4,
        touchRatio: 0.2,
        freeMode: true,
        loop: true,
        slideToClickedSlide: true,
        centeredSlides: true,
    }

    return (
        <Fragment>
            <div className="product-large-image-wrapper space-mb--30">
                {/*floating*/}
                <div className="product-large-image-wrapper__floating-badges">
                    {/*{product.discount && product.discount > 0 ? (*/}
                    {/*    <span className="onsale">-{product.discount}%</span>*/}
                    {/*) : (*/}
                    {/*    ""*/}
                    {/*)}*/}
                    {product.new ? <span className="hot">New</span> : ""}
                    {product.stock === 0 ? <span className="out-of-stock">out</span> : ""}
                </div>

                {/*wishlist button*/}
                <div className="product-details-button-wrapper">
                    <Tooltip
                        title={
                            wishlistItem !== undefined
                            ? "Added to wishlist"
                            : "Add to wishlist"
                        }
                        position="left"
                        trigget="mouseenter"
                        animation="shift"
                        arrow={true}
                        duration={200}
                    >
                        <button
                            className={`wishlist-icon ${wishlistItem !== undefined
                                ? "active"
                                : ""}`}
                            onClick={wishlistItem !== undefined
                                ? () => deleteFromWishlist(product, addToast)
                                : () => addToWishlist(product, addToast)
                            }
                        >
                            <IoIosHeartEmpty/>
                        </button>
                    </Tooltip>
                </div>

                <LightgalleryProvider>
                    <Swiper {...gallerySwiperParams}>
                        {product.images && product.images.map((image, i) => {
                            console.log("++++++++++++++++++++", product.images)
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
                    </Swiper>
                </LightgalleryProvider>
            </div>

            {/*//Small Image*/}
            <div className="product-small-image-wrapper">
                <Swiper {...thumbnailSwiperParams}>
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
                </Swiper>
            </div>
        </Fragment>
    );
};

export default ImageGalleryBottomThumb;
