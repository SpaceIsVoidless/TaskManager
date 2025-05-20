import React from 'react';
import { TaskAction } from '../utils/taskReducer';

interface Props {
  filter: string;
  dispatch: React.Dispatch<TaskAction>;
}

const FilterDropdown: React.FC<Props> = ({ filter, dispatch }) => {
  return (
    <select
      value={filter}
      onChange={(e) =>
        dispatch({ type: 'SET_FILTER', payload: e.target.value })
      }
    >
      <option value="all">All</option>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
  );
};

export default FilterDropdown;
