import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      priority,
      deadline: deadline || new Date().toISOString(),
    };

    onAddTask(newTask);
    setTitle('');
    setPriority('medium');
    setDeadline('');
  };

  return (
    <div className="add-task-container">
      <form onSubmit={handleSubmit} className="add-task-form">
        <div className="form-group">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="task-input"
          />
        </div>
        <div className="form-group">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="priority-select"
          >
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="deadline-input"
          />
        </div>
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask; 