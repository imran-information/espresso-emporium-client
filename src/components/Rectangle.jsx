import React from 'react';
import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'

const Rectangle = () => {
    return (
        <div className='md:flex gap-10 justify-evenly p-10 bg-[#ECEAE3]'>
            <div className="w-60">
                <img src={icon1} alt="" />
                <h2 className='text-3xl my-1'>Awesome Aroma</h2>
                <p className='text-lg'>You will definitely be a fan of the design & aroma of your coffee.</p>
            </div>
            <div className="w-60">
                <img src={icon2} alt="" />
                <h2 className='text-3xl my-1'>High Quality</h2>
                <p className='text-lg'>We served the coffee to you maintaining the best quality.</p>
            </div>
            <div className="w-60">
                <img src={icon3} alt="" />
                <h2 className='text-3xl my-1'>Pure Grades</h2>
                <p className='text-lg'>The coffee is made of the green coffee beans which you will love.</p>
            </div>
            <div className="w-60">
                <img src={icon4} alt="" />
                <h2 className='text-3xl my-1'>Proper Roasting</h2>
                <p className='text-lg'>Your coffee is brewed by first roasting the green coffee beans.</p>
            </div>

        </div>
    );
};

export default Rectangle;