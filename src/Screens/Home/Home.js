
import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {LayoutTwo} from "../../components/Layout/Layout";
import SliderMain from "../../components/Slider/SliderMain";
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

            <SliderMain
                sliderData={products}
                spaceBottomClass="space-mb--r100"
            />


            <HomeNewSlider products={products}/>
            {/*/!*보류*!/*/}
            {/*/!*<CategoryGrid spaceBottomClass="space-mb--r100"/>*!/*/}

            <ProductTab products={products}/>
        </LayoutTwo>
    );
}
export default Home;
