import React, { use, useState } from 'react';

const Users = ({usersPromise}) => {

    const initialUsers = use(usersPromise);

    const [users,setUsers] = useState(initialUsers);

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const newUser = {name,email};

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser) 
        })
        .then(res=>res.json())
        .then(data=>{console.log('after saving user',data)
            if(data.insertedId){
                newUser._id = data.insertedId;
                setUsers([...users,newUser])
            }
        })


    }


    return (
        <div className='flex flex-col justify-center items-center mt-20'>
           <div> <h1 className='text-3xl text-blue-600 font-bold mb-10'>Simple Crud</h1></div>
            <div>
                <form onSubmit={handleSubmit} action="" className='bg-white p-6 rounded shadow'>
                <input type="text"  name='name' className='border rounded p-2 mb-2'/><br />
                <input type="email" name='email' className='border rounded p-2 mb-2'/><br />
                <input type="submit" value={'submit'} className='bg-blue-500 text-white p-2 rounded'/>
            </form>
            </div>

            <div>
                <h2 className='text-2xl text-green-600 font-bold mt-10 mb-5'>Users List</h2>
                <ul>
                    {
                        users.map(user=> <li key={user._id}>{user.name} - {user.email}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Users;