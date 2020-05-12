import React, { useState } from 'react';
import Header from '../Shared/Header';
import Table from '../Shared/Body/Table';

export default function Main() {
  const usersInitial = [
    { idUser: 1, firstName: 'Mykhailo', lastName: 'Petrenko' },
    { idUser: 2, firstName: 'Roman', lastName: 'Zhurba' },
    { idUser: 3, firstName: 'Piotr', lastName: 'Gago' },
    { idUser: 4, firstName: 'Volodymir', lastName: 'Chaplykin' },
  ];

  const [users, setUsers] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});

  const addUser = () => {
    setUsers([...users, { idUser: users[users.length - 1].idUser + 1, firstName: 'aaa', lastName: 'bbb' }]);
  };
  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };
  return (
    <>
      <Header />
      <div className="container">
        <br />
        <button type="button" onClick={addUser} className="btn">Add User</button>
        <Table
          users={users}
          setSelectedUser={setCurrentlySelectedUser}
          selectedUser={selectedUser}
        />
      </div>
    </>
  );
}
