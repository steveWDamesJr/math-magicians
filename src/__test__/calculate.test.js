import calculate from "../logic/calculate";

describe('Test calculate function', () => {
  test('Adding two numbers', () => {
    const obj = {
      total: '3',
      next: '5',
      operation: '+',
    };

    const output = {
      total: '8',
      next: null,
      operation: '+',
    };

    const result = calculate(obj, '+')
    expect(result).toEqual(output)
  })

  test('Subtract two numbers', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '-',
    };

    const output = {
      total: '5',
      next: null,
      operation: '-',
    };

    const result = calculate(obj, '-')
    expect(result).toEqual(output)
  })

  test('Multiply two numbers', () => {
    const obj = {
      total: '3',
      next: '5',
      operation: 'x',
    };

    const output = {
      total: '15',
      next: null,
      operation: 'x',
    };

    const result = calculate(obj, 'x')
    expect(result).toEqual(output)
  })

  test('Divide two numbers', () => {
    const obj = {
      total: '15',
      next: '5',
      operation: '÷',
    };

    const output = {
      total: '3',
      next: null,
      operation: '÷',
    };

    const result = calculate(obj, '÷')
    expect(result).toEqual(output)
  })

  test('Divide two numbers', () => {
    const obj = {
      total: '15',
      next: '5',
      operation: '÷',
    };

    const output = {
      total: null,
      next: null,
      operation: null,
    };

    const result = calculate(obj, 'AC')
    expect(result).toEqual(output)
  })

  test('Modulo operation', () => {
    const obj = {
      total: '15',
      next: '5',
      operation: '%',
    };

    const output = {
      total: '0',
      next: null,
      operation: '%',
    };

    const result = calculate(obj, '%')
    expect(result).toEqual(output)
  })

  test('+/- button', () => {
    const obj = {
      total: '15',
      next: '5',
      operation: '+',
    };

    const output = {
      total: '15',
      next: '-5',
      operation: '+',
    };

    const result = calculate(obj, '+/-')
    expect(result).toEqual(output)
  })
})
