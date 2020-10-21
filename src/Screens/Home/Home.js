
import React, {useEffect, useState} from 'react';
import Swiper from 'react-id-swiper';
import axios from 'axios'
import {LayoutTwo} from "../../components/Layout/Layout";
import SliderTwo from "../../components/Slider/SliderTwo";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProductTab from "../../components/ProductTab/ProductTab";
import HomeNewSlider from "../../components/HomeNewSlider/HomeNewSlider";





const Home = ({product}) => {

    const [products, setProducts] = useState([])

    const getData = async () => {
        const {data} = await axios.get('/products')
        setProducts(data)
        console.log("+++++++++++++", data)
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <LayoutTwo>

            {/*<SliderTwo*/}
            {/*    sliderData={products}*/}
            {/*    spaceBottomClass="space-mb--r100"*/}
            {/*/>*/}
            {/*<div className="space-mb--r50"/>*/}

            <HomeNewSlider products={products}/>
            {/*/!*보류*!/*/}
            {/*/!*<CategoryGrid spaceBottomClass="space-mb--r100"/>*!/*/}

            <ProductTab products={products}/>
        </LayoutTwo>
    );
}
export default Home;
