import React from 'react';
import { Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { updateFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const { value } = event.target;
    dispatch(updateFilter(value));
  };

  return (
    <Label>
      Find contacts by name
      <input name="filter" type="text" value={filter} onChange={onChange} />
    </Label>
  );
};

export default Filter;
