import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText('Piano Notes')).toBeInTheDocument();
  });
});