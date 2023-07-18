const stringLength = require('./stringLength');

// Arrange
test('counts each character of string input', () => {
    expect(stringLength("hello")).toBe(5);
});

test('at least 1 character long', () => {
    expect(stringLength("helo")).toBe(4);
});

test('less than 10 character count', () => {
    expect(stringLength("hello dear")).toBe(10);
});

test('throw error message when string is greater than 10', () => {
    expect(() => stringLength("my name is winnie")).toThrow(Error);
});