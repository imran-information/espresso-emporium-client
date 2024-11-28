import React from 'react';
import errorImg from '../assets/images/404/404.gif'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (

        <div className='my-28 w-10/12 mx-auto '>
            <Link to="/">
                <h3 className='text-2xl my-7'> Back to home</h3>
            </Link>

            <img className='min-h-screen mx-auto' src={errorImg} alt="" />
        </div>

    );
};

export default ErrorPage;