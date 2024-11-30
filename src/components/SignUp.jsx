import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value
        const password = e.target.password.value
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                const creationTime = res.user.metadata.creationTime;
                const newUser = {
                    name,
                    photo,
                    email,
                    creationTime
                }
                fetch('https://espresso-emporium-server-ruby.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Successfully!",
                                text: "SignUp successfully!",
                                icon: "success"
                            });
                            form.reset()
                        }
                    })
            }).catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='flex flex-col justify-center items-center mt-44 mb-20'>
            <div className="card bg-base-100 w-full  max-w-2xl shrink-0 shadow-2xl">
                <h3 className='text-4xl text-center font-extrabold '>Sign Up now!!</h3>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">SignUP</button>
                    </div>
                </form>

                <p className='text-center'>Already Haven Account ? <NavLink to='/signin' className='text-teal-400 '>Login</NavLink></p>

            </div>
        </div>
    );
};

export default SignUp;