import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Piano Notes text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Piano Notes/i);
  expect(linkElement).toBeInTheDocument();
});
