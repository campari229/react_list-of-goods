import React from 'react';
import PropTypes from 'prop-types';

import './SelectLength.css';

const selectValues = [];

for (let i = 1; i < 11; i += 1) {
  selectValues.push(i);
}

export const SelectLength = ({ setMinLength }) => (
  <select
    onChange={event => setMinLength(event.target.value)}
    className="select"
  >
    {selectValues.map(value => (
      <option key={value} className="select__option">
        {value}
      </option>
    ))}
  </select>
);

SelectLength.propTypes = {
  setMinLength: PropTypes.func.isRequired,
};
