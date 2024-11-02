import { render, screen } from '@testing-library/react';
import Students from './Students';

test('renders Students page', () => {
  render(<Students />);
  const studentsElement = screen.getByText(/Students/i);
  expect(studentsElement).toBeInTheDocument();
});
