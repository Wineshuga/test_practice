const reverseString = require('./reverseString');
const stringLength = require('./stringLength');

test('counts each character of string input', () => {
    // Arrange
    const string = "hello"

    // Act
    const count = stringLength(string)

    // Assert
    expect(count).toBe(5);
});

test('at least 1 character long', () => {
    // Arrange
    const string = "helo"

    // Act
    const count = stringLength(string)

    // Assert
    expect(count).toBe(4);
});

test('less than 10 character count', () => {
    // Arrange
    const string = "hello dear"

    // Act
    const count = stringLength(string)

    // Assert
    expect(count).toBe(10);
});

test('throw error message when string is greater than 10', () => {
    // Arrange
    const string = "my name is winnie"

    // Act & Assert
    expect(() => stringLength(string)).toThrow(Error);
});

test('should reverse string', () => {
    expect(reverseString('winnie')).toBe('einniw')
});