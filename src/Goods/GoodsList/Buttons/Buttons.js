import React from 'react';
import PropTypes from 'prop-types';

import { SelectLength } from './SelectLength/SelectLength';
import './Buttons.css';

export const Buttons = props => (
  <>
    <div className="buttons">
      <button
        type="button"
        onClick={props.reverse}
        className="btn"
      >
        reverse
      </button>
      <button
        type="button"
        onClick={props.sortByLength}
        className="btn"
      >
        sort by length
      </button>
      <button
        type="button"
        onClick={props.sortByName}
        className="btn"
      >
        sort by Name
      </button>
      <button
        type="button"
        onClick={() => props.setMinLength(1)}
        className="btn"
      >
        reset
      </button>
    </div>
    <SelectLength setMinLength={props.setMinLength} />
  </>
);

Buttons.propTypes = {
  reverse: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  sortByName: PropTypes.func.isRequired,
  setMinLength: PropTypes.func.isRequired,
};
