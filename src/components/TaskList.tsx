import React, { useEffect, useReducer } from 'react';
import { fetchTasks } from '../hooks/useTasks';
import { Task, TaskAction, taskReducer } from '../utils/taskReducer';
import { urgencyScore } from '../utils/urgencyScore';
import FilterDropdown from './FilterDropdown';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [],
    filteredTasks: [],
    filter: 'all'
  });

  useEffect(() => {
    fetchTasks().then((data) => {
      dispatch({ type: 'SET_TASKS', payload: data });
    });
  }, []);

  useEffect(() => {
    dispatch({ type: 'APPLY_FILTER_AND_SORT' });
  }, [state.filter, state.tasks]);

  return (
    <div>
      <FilterDropdown filter={state.filter} dispatch={dispatch} />
      {state.filteredTasks.map((task: Task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
