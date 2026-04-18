import React, { use, useState } from 'react';
import { Link, Links } from 'react-router';

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

    const handleDeleteUser = (id)=>{
        fetch(`http://localhost:3000/users/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{console.log('after deleting user',data)
            setUsers(users.filter(user=>user._id !== id))
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
                <h2 className='text-2xl text-green-600 font-bold mt-10 mb-5'>Users List: {users.length}</h2>
                <ul className='bg-white p-6 rounded shadow w-96'>
                    {
                        users.map(user=> <li className='border m-3 rounded p-2' key={user._id}>{user.name} - {user.email} 
                        <Link to={`/users/${user._id}`   } className='text-blue-600 ml-5'>View Details</Link>
                        <Link to={`/update/${user._id}`   } className='text-orange-600 ml-5'>Update Details</Link>


                          <button onClick={() => handleDeleteUser(user._id)} className='text-red-600 ml-5'>x</button></li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Users;