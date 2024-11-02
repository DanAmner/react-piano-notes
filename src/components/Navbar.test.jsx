import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders Navbar component', () => {
  render(<Navbar />);
  const navbarElement = screen.getByText(/Piano Notes/i);
  expect(navbarElement).toBeInTheDocument();
});
