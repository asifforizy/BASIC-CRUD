import React from 'react';
import { useLoaderData } from 'react-router';

const UsersDEtails = () => {
    const user = useLoaderData();
    return (
        <div className=''>
            <h3 className='text-center text-3xl text-red-500 items-center mt-10 flex justify-center'>user details </h3>
            <div className='border rounded-xl p-10 m-20 '>
                <p className='text-2xl text-blue-600 text-center justify-center items-center flex'>Name : {user.name}</p>
            <p className='text-xl text-gray-700 text-center justify-center items-center flex'   >{user.email}</p>
            </div>
        </div>
    );
};

export default UsersDEtails;