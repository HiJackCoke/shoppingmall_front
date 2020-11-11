import React, {Fragment, useState} from 'react';
import { LightgalleryItem, LightgalleryProvider } from 'react-lightgallery';
import IdSwiper from "react-id-swiper/lib/ReactIdSwiper.custom";
import { Swiper, Navigation, Pagination, Controller } from 'swiper'
import {IoMdExpand} from 'react-icons/io'
import {Tooltip} from 'react-tippy';



const ImageGalleryBottomThumb = ({
 product,
 wishlistItem,
 deleteFromWishlist,
 addToWishlist,
 addToast
}) => {

    const [mainSwiper, setMainSwiper] = useState(null)
    const [thumbSwiper, setThumbSwiper] = useState(null)


    // const [gallerySwiper, getGallerySwiper] = useState(null)
    // const [thumbnailSwiper, getThumbnailSwiper] = useState(null)
    //
    // useEffect(() => {
    //     if (
    //         gallerySwiper !== null &&
    //         gallerySwiper.controller &&
    //         thumbnailSwiper !== null &&
    //         thumbnailSwiper.controller
    //     ) {
    //         gallerySwiper.controller.control = thumbnailSwiper;
    //         thumbnailSwiper.controller.control = gallerySwiper;
    //     }
    // }, [gallerySwiper, thumbnailSwiper]);

    const thumbnailSwiperParams = {
        Swiper,
        modules: [Navigation, Pagination, Controller ],
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

    const gallerySwiperParams = {
        Swiper,
        modules: [ Navigation, Pagination, Controller ],
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true
        },
        spaceBetween: 10,
        loopedSlides: 4,
        loop: true,
        effect: 'fade',
        thumbs: {
            swiper: thumbnailSwiperParams
        }
    }


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
                    <IdSwiper {...gallerySwiperParams}
                        onSwiper={setMainSwiper} controller={{control: thumbSwiper}}
                    >
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
                <IdSwiper {...thumbnailSwiperParams}
                    onSwiper={setThumbSwiper} controller={{control: mainSwiper}}
                >
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
