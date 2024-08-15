const StringLengthFrequency = require('./task1');

test('String array with multiple string length', () => {
    expect(StringLengthFrequency(['a', 'ab', 'abc', 'cd', 'def', 'gh'])).toStrictEqual(['ab', 'cd', 'gh']);
});

test('String array with no element', () => {
    expect(StringLengthFrequency([])).toStrictEqual([]);
});

test('String array with only one element', () => {
    expect(StringLengthFrequency(['a'])).toStrictEqual(['a']);
});