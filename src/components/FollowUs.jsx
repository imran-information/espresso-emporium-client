import React from 'react';
import cupImg1 from '../assets/images/cups/Rectangle 10.png'
import cupImg2 from '../assets/images/cups/Rectangle 11.png'
import cupImg3 from '../assets/images/cups/Rectangle 12.png'
import cupImg4 from '../assets/images/cups/Rectangle 13.png'
import cupImg5 from '../assets/images/cups/Rectangle 14.png'
import cupImg6 from '../assets/images/cups/Rectangle 15.png'
import cupImg7 from '../assets/images/cups/Rectangle 16.png'
import cupImg8 from '../assets/images/cups/Rectangle 9.png'
const FollowUs = () => {
    return (
        <div className='my-20 w-10/12 mx-auto'>
            <p className='text-center text-lg'>--- Follow Us Now ---</p>
            <h2 className='text-5xl text-center mb-11 font-semibold text-[#331A15]'>Follow on Instagram</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="">
                    <img className=' w-full' src={cupImg1} alt="" />
                </div>
                <div className="">
                    <img className=' w-full' src={cupImg2} alt="" />
                </div>
                <div className="">
                    <img className=' w-full' src={cupImg3} alt="" />
                </div>
                <div className="">
                    <img className=' w-full' src={cupImg4} alt="" />
                </div>
                <div className="">
                    <img className=' w-full' src={cupImg5} alt="" />
                </div>
                <div className="">
                    <img className=' w-full' src={cupImg6} alt="" />
                </div>
                <div className="">
                    <img className=' w-full' src={cupImg7} alt="" />
                </div>
                <div className="">
                    <img className=' w-full' src={cupImg8} alt="" />
                </div>
            </div>

        </div>
    );
};

export default FollowUs;