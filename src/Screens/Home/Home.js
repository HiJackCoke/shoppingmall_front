
import React, {useEffect, useState} from 'react';
import Swiper from 'react-id-swiper';
import {LayoutTwo} from "../../components/Layout/Layout";
import SliderTwo from "../../components/Slider/SliderTwo";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProductTab from "../../components/ProductTab/ProductTab";
import HomeNewSlider from "../../components/HomeNewSlider/HomeNewSlider";
import HomeGridWrapper from "../../components/ProductThumb/HomeGridWrapper";

import products from "../../products";
import axios from "axios";

const Home = ({product}) => {

    return (
        <LayoutTwo>
            <SliderTwo
                sliderData={products}
                spaceBottomClass="space-mb--r100"
            />
            <div className="space-mb--r50"/>
            <SectionTitle
                title="New Items"
            />

            <HomeNewSlider/>
            {/*보류*/}
            {/*<CategoryGrid spaceBottomClass="space-mb--r100"/>*/}

            <ProductTab />
        </LayoutTwo>
    );
}
export default Home;
