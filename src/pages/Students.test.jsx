import { render, screen } from '@testing-library/react';
import Students from './Students';
import { AppProvider } from '../context/AppContext';

test('renders Students page', () => {
  render(
    <AppProvider>
      <Students />
    </AppProvider>
  );
  const studentsElement = screen.getByText(/Students/i);
  expect(studentsElement).toBeInTheDocument();
});
