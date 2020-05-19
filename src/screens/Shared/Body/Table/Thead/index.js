import React from 'react';
import PropTypes from 'prop-types';

export default function Thead({ columnsNames, sortUsers }) {
  return (
    <thead>
      <tr>
        {columnsNames.map((c) => <th onClick={() => sortUsers(c)} key={c}>{c}</th>)}
      </tr>
    </thead>
  );
}
Thead.propTypes = {
  columnsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortUsers: PropTypes.func.isRequired,
};
