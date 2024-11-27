import React from 'react';
import Home from '../pages/Home';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='font-rancho'>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;