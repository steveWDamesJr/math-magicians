import calculate from '../logic/calculate';

test('If button is AC do we return an object', () => {
  expect(calculate(7, 'AC')).toEqual({
    total: null,
    next: null,
    operation: null,
  });
});

test('If button is 0 and obj.next is 0 return an empty object', () => {
  expect(calculate('0', '0')).toMatchObject({});
});

test('If button is . and obj.next.includes . return a copy of that obj', () => {
  expect(calculate('.', '.')).toMatchObject({ 'total': '0.'});
});
