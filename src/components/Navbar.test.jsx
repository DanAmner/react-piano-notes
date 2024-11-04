import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { AppProvider } from '../context/AppContext';

test('renders Navbar component', () => {
  render(
    <AppProvider>
      <Navbar />
    </AppProvider>
  );
  const navbarElement = screen.getByText(/Piano Notes/i);
  expect(navbarElement).toBeInTheDocument();
});
