import PropTypes from 'prop-types';

export const Shape = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
