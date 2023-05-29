import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button', () => {
  render(<Button type="button">demo</Button>);
  const linkElement = screen.getByText(/demo/i);
  expect(linkElement).toBeInTheDocument();
});
