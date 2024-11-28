import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewCoffee = () => {
    const coffee = useLoaderData()


    const { name, chef, supplier, taste, category, details, photo } = coffee;
    return (
        <div className='my-28 w-10/12 mx-auto'>
            <Link to="/">
                <h3 className='text-2xl my-7'> Back to home</h3>
            </Link>
            <div className="card lg:card-side rounded bg-[#F4F3F0] p-10">
                <figure className='card-body w-1/4'>
                    <img className='w-1/2'
                        src={photo}
                        alt="Album" />
                </figure>
                <div className="card-body p-32">
                    <h2 className="card-title text-3xl">Name: {name}</h2>
                    <p className='text-xl'>Chef: {chef}</p>
                    <p className='text-xl'>Supplier: {supplier}</p>
                    <p className='text-xl'>Taste: {taste}</p>
                    <p className='text-xl'>Category: {category}</p>
                    <p className='text-xl'>Details: {details}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;