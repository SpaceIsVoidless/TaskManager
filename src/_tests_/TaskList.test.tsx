import React from 'react';
import { render, screen } from '@testing-library/react';
import { urgencyScore } from '../utils/urgencyScore';
import { Task } from '../utils/taskReducer';

describe('urgencyScore', () => {
  it('computes correct score', () => {
    const mockTask: Task = {
      id: 1,
      title: 'Test',
      deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
      priority: 'high'
    };
    const score = urgencyScore(mockTask);
    expect(score).toBeCloseTo(1, 0); // 3 / 3 = 1
  });
});
