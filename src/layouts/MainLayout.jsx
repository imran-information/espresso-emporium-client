import React from 'react';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className='font-rancho'>
            <Navbar></Navbar>
            <div className=" bg-outlet-bg bg-no-repeat">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;