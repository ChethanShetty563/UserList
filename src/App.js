import React, { useState } from 'react';
import AddUSer from './components/Users/AddUSer';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setUsers((prev) => {
      return [...prev, { name: name, age: age, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUSer onUserAdd={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
