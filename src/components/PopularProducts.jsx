import React from 'react';
import icon1 from '../assets/images/icons/1.png'

const PopularProducts = () => {
    return (
        <div className='my-20'>
            <p className='text-center text-lg'>--- Sip & Savor ---</p>
            <h2 className='text-5xl text-center font-semibold text-[#331A15]'>Our Popular Products</h2>
            <div className='flex justify-center '>
                <button className="bg-[#E3B577] py-1 px-5 mt-4 text-white text-lg border-4 border-[#331A15] rounded-md">Add Coffee <img className='w-8 inline' src={icon1} alt="" /></button>
            </div>
        </div>
    );
};

export default PopularProducts;