// Button.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('renders a button element', () => {
    render(<Button />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('displays the correct text', () => {
    const buttonText = 'Click me';
    render(<Button text={buttonText} />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent(buttonText);
  });

  // Add more test cases as needed
});
