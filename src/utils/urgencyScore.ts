import { Task } from './taskReducer';

const priorityWeight = {
  high: 3,
  medium: 2,
  low: 1
};

export const urgencyScore = (task: Task): number => {
  const now = new Date();
  const deadline = new Date(task.deadline);
  const daysToDeadline = (deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  return daysToDeadline / priorityWeight[task.priority];
};
