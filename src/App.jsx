import React from 'react';
import Users from './Components/Users';

const usersPromise = fetch('http://localhost:3000/users')
.then(res=>res.json())


const App = () => {
  return (
    <div>
      <Users usersPromise={usersPromise}></Users>
    </div>
  );
};

export default App;