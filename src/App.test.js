import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders task manager dashboard', () => {
  render(<App />);
  const headerElement = screen.getByText(/Task Manager Dashboard/i);
  expect(headerElement).toBeInTheDocument();
});

test('filters tasks by priority', () => {
  render(<App />);
  const filterSelect = screen.getByRole('combobox');
  fireEvent.change(filterSelect, { target: { value: 'high' } });
  expect(filterSelect.value).toBe('high');
});