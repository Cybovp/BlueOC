const SumTwoLargest = require('./task2');

test('Array with multiple elements', () => {
    expect(SumTwoLargest([1, 4, 2, 3, 5])).toStrictEqual(9);
});

test('Array with no element', () => {
    expect(SumTwoLargest([])).toStrictEqual(0);
});

test('Array with only one element', () => {
    expect(SumTwoLargest([1])).toStrictEqual(1);
});