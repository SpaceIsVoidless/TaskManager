import React from 'react';

const TaskList = ({ tasks, onTaskComplete }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'var(--high-priority)';
      case 'medium':
        return 'var(--medium-priority)';
      case 'low':
        return 'var(--low-priority)';
      default:
        return 'var(--secondary-color)';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <div className="no-tasks">No tasks found</div>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className={`task-card ${task.completed ? 'completed' : ''}`}>
            <div className="task-header">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onTaskComplete(task.id)}
                />
                <h3 className="task-title">{task.title}</h3>
              </div>
              <span
                className="priority-badge"
                style={{ backgroundColor: getPriorityColor(task.priority) }}
              >
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </span>
            </div>
            <div className="task-details">
              <p className="deadline">
                <span className="label">Deadline:</span> {formatDate(task.deadline)}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;