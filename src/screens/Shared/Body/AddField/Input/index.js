import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ plsText, name }) {
  return <input name={name} placeholder={plsText} className="col s4 offset-s1" type="text" />;
}

Input.propTypes = {
  plsText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
