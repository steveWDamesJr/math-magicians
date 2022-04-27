import operate from '../logic/operate';

describe('Test operators perform specific operator function', () => {
  it('test + operator adds two numbers', () => {
    expect(operate('35', '5', '+')).toEqual('40');
  });
  it('test - operator subtracts two numbers', () => {
    expect(operate('20', '10', '-')).toEqual('10');
  });
  it('test x operator multiplies two numbers', () => {
    expect(operate('10', '5', 'x')).toEqual('50');
  });
  it('test ÷ operator divides two numbers', () => {
    expect(operate('24', '2', '÷')).toEqual('12');
  });
  it('test error for Cant divide by 0', () => {
    expect(operate('60', '0', '÷')).toBe("Can't divide by 0.");
  });
  it('test % operator leaves modulo of two numbers', () => {
    expect(operate('9', '3', '%')).toEqual('0');
  });
  it('test error for modulo Cant divide by 0', () => {
    expect(operate('8', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });
  it('test / symbol is unknown operation and throws error', () => {
    expect(() => operate('7', '7', '/')).toThrow('Unknown operation \'/\'');
  });
});
