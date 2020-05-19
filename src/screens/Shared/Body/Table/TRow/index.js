import React from 'react';
import PropTypes from 'prop-types';

export default function Tbody({
  user, setSelectedUser, selectedUser, deleteUser,
}) {
  return (
    <tr
      style={{
        backgroundColor:
          user.idUser === selectedUser.idUser ? '#4acfd3' : 'white',
      }}
      onClick={() => setSelectedUser(user)}
    >
      <td>{user.idUser}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td><button type="button" onClick={() => deleteUser(user)} className="btn red lighten-2">DELETE</button></td>
    </tr>
  );
}
Tbody.propTypes = {
  user: PropTypes.shape({
    idUser: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.shape({
    idUser: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  deleteUser: PropTypes.func.isRequired,
};
