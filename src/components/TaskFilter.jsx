import React from 'react';

const TaskFilter = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="filter-container">
      <select
        value={currentFilter}
        onChange={(e) => onFilterChange(e.target.value)}
        className="filter-select"
      >
        <option value="all">All Tasks</option>
        <option value="high">High Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="low">Low Priority</option>
      </select>
    </div>
  );
};

export default TaskFilter;