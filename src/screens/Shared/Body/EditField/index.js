import React from 'react';
import Thead from '../Table/Thead';
import EditBody from './EditBody';

export default function EditField({ setSelectedUser, selectedUser }) {
  if (Object.keys(selectedUser).length !== 0) {
    return (
      <div>
        <h5>Edit user:</h5>
        <table>
          <Thead columnsNames={['id', 'First name', 'Last name']} />
          <EditBody selectedUser={selectedUser} />
        </table>
      </div>
    );
  } return <div />;
}
