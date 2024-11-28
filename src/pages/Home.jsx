import React from 'react';
import Banner from '../components/Banner';
import Rectangle from '../components/Rectangle';
import PopularProducts from '../components/PopularProducts';
import FollowUs from '../components/FollowUs';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const coffees = useLoaderData()


    return (
        <div>

            <Banner></Banner>
            <Rectangle></Rectangle>
            <PopularProducts coffees={coffees}></PopularProducts>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;