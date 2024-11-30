import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleDeleteCoffee = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://espresso-emporium-server-henna.vercel.app/coffees/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                        });
                        const remaining = coffees.filter(cof => cof._id !== _id)
                        setCoffees(remaining)

                    })
            }
        });



    }
    return (
        <div className="card card-side bg-[#F5F4F1]">
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
                    <Link to={`view-coffee/${_id}`}>
                        <button className=" p-3 w-full  join-item bg-[#D2B48C]">View</button>
                    </Link>
                    <Link to={`update-coffee/${_id}`}>
                        <button className=" p-3 w-full  join-item bg-[#3C393B]">Update</button>
                    </Link>

                    <button onClick={() => handleDeleteCoffee(_id)} className=" p-3  w-full join-item bg-[#EA4744]">X</button>

                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;