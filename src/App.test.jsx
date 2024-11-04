import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { AppProvider } from './context/AppContext';

test('renders Piano Notes title', () => {
  render(
    <AppProvider>
      <App />
    </AppProvider>
  );
  const titleElement = screen.getByText(/Piano Notes/i);
  expect(titleElement).toBeDefined();
});
