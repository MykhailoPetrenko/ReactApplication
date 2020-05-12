import React from 'react';
import PropTypes from 'prop-types';

export default function Thead({ columnsNames }) {
  return (
    <thead>
      <tr>
        {columnsNames.map((c) => <th key={c}>{c}</th>)}
      </tr>
    </thead>
  );
}
Thead.propTypes = {
  columnsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};
