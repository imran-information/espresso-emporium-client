import React from 'react';


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-banner-bg">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content sm:text-center">
                <div className="flex">
                    <div className=""></div>
                    <div className="md:pl-96">
                        <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5 text-lg">
                            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! <br /> Enjoy the beautiful moments and make them memorable.
                        </p>
                        <button className="bg-[#E3B577] py-2 px-7 text-lg text-black">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;