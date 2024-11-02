import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component', () => {
  render(<Footer />);
  const footerElement = screen.getByText(/Piano Notes/i);
  expect(footerElement).toBeInTheDocument();
});
