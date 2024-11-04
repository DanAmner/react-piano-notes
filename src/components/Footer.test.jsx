import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { AppProvider } from '../context/AppContext';

test('renders Footer component', () => {
  render(
    <AppProvider>
      <Footer />
    </AppProvider>
  );
  const footerElement = screen.getByText(/Piano Notes/i);
  expect(footerElement).toBeInTheDocument();
});
