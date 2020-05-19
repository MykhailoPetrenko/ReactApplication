import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

export default function AddField({ addUser }) {
  return (
    <div className="row">
      <button type="button" onClick={addUser} className="btn col s2">
        Add User
      </button>
      <Input plsText="Imie" />
      <Input plsText="Nazwisko" />
    </div>
  );
}
AddField.propTypes = {
  addUser: PropTypes.func.isRequired,
};
