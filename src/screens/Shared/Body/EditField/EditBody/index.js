import React from 'react';

export default function EditBody({ selectedUser }) {
  return (
    <tbody>
      <tr>
        <td>
          <input placeholder={selectedUser.idUser} type="text"/>
        </td>
        <td>
          <input placeholder={selectedUser.firstName} type="text"/>
        </td>
        <td>
          <input placeholder={selectedUser.lastName} type="text"/>
        </td>
      </tr>
    </tbody>
  );
}
