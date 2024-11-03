import { render, screen } from '@testing-library/react';
import Notes from './Notes';
import { AppProvider } from '../context/AppContext';

test('renders Notes page', () => {
  render(
    <AppProvider>
      <Notes />
    </AppProvider>
  );
  const notesElement = screen.getByText(/Notes/i);
  expect(notesElement).toBeInTheDocument();
});
