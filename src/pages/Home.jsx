import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Rectangle from '../components/Rectangle';
import PopularProducts from '../components/PopularProducts';
import FollowUs from '../components/FollowUs';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Rectangle></Rectangle>
            <PopularProducts></PopularProducts>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;