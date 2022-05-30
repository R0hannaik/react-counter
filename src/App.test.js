import { render, screen } from '@testing-library/react';
import App from './App';

test('Render the app properly', () => {
  render(<App />);
  const linkElement = screen.getByText('Increment Counter');
  expect(linkElement).toBeInTheDocument();
});
