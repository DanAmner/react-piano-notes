import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Piano Notes title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Piano Notes/i);
  expect(titleElement).toBeDefined();
});
