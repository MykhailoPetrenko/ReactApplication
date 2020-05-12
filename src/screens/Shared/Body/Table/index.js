import React from 'react';
import PropTypes from 'prop-types';
import Thead from './Thead';
import Tbody from './TRow';

export default function Table({ users, setSelectedUser, selectedUser }) {
  return (
    <table>
      <Thead columnsNames={['id', 'First name', 'Last name']} />
      <tbody>
        {users.map((u) => (
          <Tbody
            key={u.idUser}
            selectedUser={selectedUser}
            user={u}
            setSelectedUser={setSelectedUser}
          />
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.shape({
    idUser: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};
