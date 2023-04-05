import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './Filter.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

const Filter = ({ onChange }) => {
  const filter = useSelector(getFilter);

  return (
    <Label>
      Find contacts by name
      <input name="filter" type="text" value={filter} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
