import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers = useLoaderData()

    const [users, setUsers] = useState(loadedUsers)

    const handleDeleteUser = (_id) => {
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
                fetch(`https://espresso-emporium-server-ruby.vercel.app/users/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your User has been deleted.",
                                icon: "success"
                            });
                            const remainingUsers = users.filter(use => use._id !== _id)
                            setUsers(remainingUsers)
                        }
                    })
            }
        });


    }
    return (
        <div className="overflow-x-auto mt-44 mb-20 w-10/12 mx-auto">
            <div className="text-5xl text-center mb-10">Users: {users.length}</div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Creation Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map(user => <tr key={user._id} className="">
                            <th>1</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.creationTime}</td>
                            <td className='flex gap-3 text-lg text-white'>
                                <button className=" p-1 w-full   bg-[#D2B48C]">View</button>
                                <button className=" p-1 w-full   bg-[#3C393B]">Update</button>
                                <button onClick={() => handleDeleteUser(user._id)} className=" p-1  w-full  bg-[#EA4744]">X</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Users;