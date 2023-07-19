const reverseString = require('./reverseString');

test('should reverse string', () => {
    expect(reverseString('winnie')).toBe('einniw')
});