import React, { useState, useEffect, useReducer } from 'react';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import AddTask from './components/AddTask';
import './App.css';

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return { ...state, tasks: action.payload };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    default:
      return state;
  }
};

const initialState = {
  tasks: [],
  filter: 'all'
};

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    // Mock API call
    const fetchTasks = async () => {
      const mockTasks = [
        { id: 1, title: 'Complete project proposal', deadline: '2024-02-20T10:00:00', priority: 'high', completed: false },
        { id: 2, title: 'Review documentation', deadline: '2024-02-25T15:00:00', priority: 'medium', completed: false },
        { id: 3, title: 'Update dependencies', deadline: '2024-03-01T12:00:00', priority: 'low', completed: false }
      ];
      dispatch({ type: 'SET_TASKS', payload: mockTasks });
    };

    fetchTasks();
  }, []);

  const handleFilterChange = (priority) => {
    dispatch({ type: 'SET_FILTER', payload: priority });
  };

  const handleAddTask = (newTask) => {
    dispatch({ type: 'ADD_TASK', payload: { ...newTask, completed: false } });
  };

  const handleTaskComplete = (taskId) => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId });
  };

  const calculateUrgencyScore = (task) => {
    const priorityWeights = { high: 3, medium: 2, low: 1 };
    const daysToDeadline = Math.ceil(
      (new Date(task.deadline) - new Date()) / (1000 * 60 * 60 * 24)
    );
    return daysToDeadline / priorityWeights[task.priority];
  };

  const filteredAndSortedTasks = state.tasks
    .filter(task => state.filter === 'all' || task.priority === state.filter)
    .sort((a, b) => calculateUrgencyScore(a) - calculateUrgencyScore(b));

  return (
    <div className="app">
      <h1>Task Manager Dashboard</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskFilter currentFilter={state.filter} onFilterChange={handleFilterChange} />
      <TaskList tasks={filteredAndSortedTasks} onTaskComplete={handleTaskComplete} />
    </div>
  );
}

export default App;