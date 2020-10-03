
import React from 'react';
import {Layout} from "../../components/Layout/Layout";
import Slider from "../../components/Slider/Slider";
import CategoryGrid from "../../components/Category/CategoryGrid";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProductTab from "../../components/ProductTab/ProductTab";


const Home = () => {
    return (
        <Layout>
            <Slider />
            <div className="space-mb--r100"/>
            <SectionTitle
                title="Fall 2020"
            />
            <CategoryGrid spaceBottomClass="space-mb--r100"/>
            <ProductTab />
        </Layout>
    );
}
export default Home;
