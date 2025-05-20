import { Task } from '../utils/taskReducer';

export const fetchTasks = async (): Promise<Task[]> => {
  // Mock API data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Task A', deadline: '2025-05-21T10:00:00Z', priority: 'high' },
        { id: 2, title: 'Task B', deadline: '2025-05-18T12:00:00Z', priority: 'medium' },
        { id: 3, title: 'Task C', deadline: '2025-05-25T09:00:00Z', priority: 'low' },
        { id: 4, title: 'Task D', deadline: '2025-05-15T08:00:00Z', priority: 'high' }
      ]);
    }, 1000);
  });
};
