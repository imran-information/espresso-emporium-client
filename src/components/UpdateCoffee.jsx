import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = { name, chef, supplier, taste, category, details, photo }

        fetch(`https://espresso-emporium-server-ruby.vercel.app/coffees/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Done!",
                        text: "Coffee Updated successfully!",
                        icon: "success"
                    });
                }
            })
    }


    return (
        <div className='my-28 w-10/12 mx-auto'>
            <Link to="/">
                <h3 className='text-2xl my-7'> Back to home</h3>
            </Link>
            <div className="bg-[#F4F3F0] p-24 rounded-md">
                <h2 className='text-4xl text-center text-[#374151] font-semibold'> Update Existing Coffee Details</h2>
                <p className='text-lg mx-auto text-center my-4 w-[600px]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleUpdateCoffee} className="card-body">
                    <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter coffee name" defaultValue={name} name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" placeholder="Enter coffee chef" defaultValue={chef} name='chef' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" placeholder="Enter coffee supplier" defaultValue={supplier} name='supplier' className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" placeholder="Enter coffee taste" defaultValue={taste} name='taste' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" placeholder="Enter coffee category" defaultValue={category} name='category' className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" placeholder="Enter coffee details" defaultValue={details} name='details' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Enter photo URL" defaultValue={photo} name='photo' className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="py-2 border-4 border-[#331A15] text-lg font-semibold rounded-md text-[#331A15] bg-[#D2B48C]">Update Coffee Details</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;