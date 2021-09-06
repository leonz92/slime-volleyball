import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
