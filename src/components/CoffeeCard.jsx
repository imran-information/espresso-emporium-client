import React from 'react';

const CoffeeCard = ({ coffee }) => {
    const { name, chef, supplier, taste, category, details, photo } = coffee;
    return (
        <div className="card card-side bg-[#F5F4F1] shadow-xl">
            <figure >
                <img className='w-40'
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="card-body pl-0 pr-0">
                <h2 className="card-title">Name: {name}</h2>
                <p>Chef: {chef}</p>
                <p>Taste: {taste}</p>
            </div>
            <div className="card-body">
                <div className="join join-vertical text-white ">
                    <button className=" p-3 join-item bg-[#D2B48C]">Eye</button>
                    <button className=" p-3 join-item bg-[#3C393B]">Update</button>
                    <button className=" p-3 join-item bg-[#EA4744]">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;