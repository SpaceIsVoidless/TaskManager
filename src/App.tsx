import React from 'react';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Task Manager Dashboard</h1>
      <TaskList />
    </div>
  );
};

export default App;
