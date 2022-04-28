import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom';

it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Perform calculation operations', () => {
  test('Click one  number to display on screen', () => {
    render(<Calculator />);
    const result = screen.getByTestId('cal-screen-out');
    userEvent.click(screen.getByText('7'));
    expect(result.innerHTML).toMatch('7');
  });
  test('Click equals button to calculate and render result of operation on screen', () => {
    render(<Calculator />);
    const result = screen.getByTestId('cal-screen-out');
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('4'));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('4'));
    userEvent.click(screen.getByText('='));
    expect(result.innerHTML).toMatch('28');
  });
  test('Click two numbers to display output on screen', () => {
    render(<Calculator />);
    const result = screen.getByTestId('cal-screen-out');
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('2'));
    expect(result.innerHTML).toMatch('52');
  });

  test('Click modulus button to see remainder of two numbers on screen', () => {
    render(<Calculator />);
    const result = screen.getByTestId('cal-screen-out');
    userEvent.click(screen.getByText('AC'));
    userEvent.click(screen.getByText('4'));
    userEvent.click(screen.getByText('0'));
    userEvent.click(screen.getByText('%'));
    userEvent.click(screen.getByText('2'));
    expect(result.innerHTML).toMatch('0');
  });
});
