import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

export default function AddField({ addUser }) {
  return (
    <form onSubmit={addUser}>
      <div className="row">
        <button type="submit" className="btn col s2">
          Add User
        </button>
        <Input name="firstName" plsText="Imie" />
        <Input name="lastName" plsText="Nazwisko" />
      </div>
    </form>
  );
}
AddField.propTypes = {
  addUser: PropTypes.func.isRequired,
};
