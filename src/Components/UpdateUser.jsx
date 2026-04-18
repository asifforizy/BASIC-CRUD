import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {



    const user = useLoaderData();



    const handleUpdateUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updatedUser = { name, email };

        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
    }



    return (
        <div>
            <h3 className='text-center text-3xl text-red-500 items-center mt-10 flex justify-center'>Edit a User </h3>
            <div className=' rounded-xl p-10 m-20 flex justify-center'>

                <form onSubmit={ handleUpdateUser} action="" className='bg-white p-6 rounded shadow '>
                    <input type="text" name='name' defaultValue={user.name} className='border rounded p-2 mb-2' /><br />
                    <input type="email" name='email' defaultValue={user.email} className='border rounded p-2 mb-2' /><br />
                    <input type="submit" value={'Confirm edit'} className='bg-blue-500 text-white p-2 rounded' />
                </form>

            </div>

            
        </div>
    );
};

export default UpdateUser;