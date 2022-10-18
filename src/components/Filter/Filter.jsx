import React from 'react';
// import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.PropType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
