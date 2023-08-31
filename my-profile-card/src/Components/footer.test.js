import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer content', () => {
  render(<Footer />);
  const footerText = screen.getByText(/Your App Name/i);
  expect(footerText).toBeInTheDocument();
});
