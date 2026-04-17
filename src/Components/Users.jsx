import React from 'react';

const Users = () => {


    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        console.log(name,email);



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
        </div>
    );
};

export default Users;