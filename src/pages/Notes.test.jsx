import { render, screen } from '@testing-library/react';
import Notes from './Notes';

test('renders Notes page', () => {
  render(
    <Notes />
  );
  const notesElement = screen.getByText(/Notes/i);
  expect(notesElement).toBeInTheDocument();
});
