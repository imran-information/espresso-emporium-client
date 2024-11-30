import React from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // signInUser(email, password);

    }
    return (
        <div className="card bg-base-100 w-full max-w-2xl h-96 shrink-0 shadow-2xl mt-44 mb-20 mx-auto">
            <h3 className='text-4xl font-semibold  text-center'>Login now</h3>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <p className='text-center'>New to the website ? <NavLink to='/signUp' className='text-teal-400 '>Sign UP</NavLink></p>
            </form>
            <div>
                {/* <button onClick={googleLogin} className="btn btn-primary">Google Login</button> */}
            </div>
        </div>
    );
};

export default SignIn;