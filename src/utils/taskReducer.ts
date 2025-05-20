import { urgencyScore } from './urgencyScore';

export type Task = {
  id: number;
  title: string;
  deadline: string;
  priority: 'low' | 'medium' | 'high';
};

export type State = {
  tasks: Task[];
  filteredTasks: Task[];
  filter: string;
};

export type TaskAction =
  | { type: 'SET_TASKS'; payload: Task[] }
  | { type: 'SET_FILTER'; payload: string }
  | { type: 'APPLY_FILTER_AND_SORT' };

export const taskReducer = (state: State, action: TaskAction): State => {
  switch (action.type) {
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.payload,
        filteredTasks: action.payload
      };

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };

    case 'APPLY_FILTER_AND_SORT': {
      let tasks = [...state.tasks];
      if (state.filter !== 'all') {
        tasks = tasks.filter((t) => t.priority === state.filter);
      }
      tasks.sort((a, b) => urgencyScore(a) - urgencyScore(b));
      return {
        ...state,
        filteredTasks: tasks
      };
    }

    default:
      return state;
  }
};
