import React from 'react';
import { Task } from '../utils/taskReducer';

const isOverdue = (deadline: string) => new Date(deadline) < new Date();

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '1rem',
        marginBottom: '0.5rem',
        backgroundColor: isOverdue(task.deadline) ? '#ffd6d6' : '#f0f0f0'
      }}
    >
      <h3>{task.title}</h3>
      <p>Deadline: {new Date(task.deadline).toLocaleString()}</p>
      <p>Priority: {task.priority}</p>
    </div>
  );
};

export default TaskItem;
