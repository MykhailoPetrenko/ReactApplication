import React, { useState } from 'react';
import Header from '../Shared/Header';
import Table from '../Shared/Body/Table';
import EditField from '../Shared/Body/EditField';
import AddField from '../Shared/Body/AddField';

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
  const deleteUser = (user) => {
    setUsers(users.filter((u) => u.idUser !== user.idUser));
  };
  /*
  Object.keys(data)
      .sort()
      .forEach(function(v, i) {
          console.log(v, data[v]);
       });

   */
  const sortUsers = (columnName) => {
    const f = columnName.charAt(0).toLowerCase().concat(columnName.slice(1).split(/\s/).join(''));
    setUsers(users.sort((a, b) => ((a[f] > b[f]) ? 1 : -1)).map((u) => u));
  };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <AddField addUser={addUser} />
        <Table
          users={users}
          setSelectedUser={setCurrentlySelectedUser}
          selectedUser={selectedUser}
          deleteUser={deleteUser}
          sortUsers={sortUsers}
        />
      </div>
      <br />
      <div className="container">
        <EditField
          setSelectedUser={setCurrentlySelectedUser}
          selectedUser={selectedUser}
        />
        <button type="button" className="btn">Edit User</button>
      </div>
    </>
  );
}
