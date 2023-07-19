const Calculator = require('./calculator');

describe('Calculator add() method', () => {

    test('should add number', () => {
    
    const calc = new Calculator;
    const sum = calc.add(5)
    expect(sum).toBe(5)
});

test('should change string to number and add it', () => {
    // Arrange
    const calc = new Calculator;
    // Act
    const sum = calc.add("5")
    // Assert
    expect(sum).toBe(5)
});

test('should throw an error', () => {
    // Arrange
    const calc = new Calculator;
    // Act & Assert
    expect(() => calc.add()).toThrow(Error)
});

})

describe('Calculator substract() method', () => { 
    test('should substract number', () => {
        // Arrange
        const calc = new Calculator;
        // Act
        const sum = calc.subtract(5)
        // Assert
        expect(sum).toBe(-5)
    });
    
    test('should change string to number and subtract it', () => {
        // Arrange
        const calc = new Calculator;
        // Act
        const sum = calc.subtract("5")
        // Assert
        expect(sum).toBe(-5)
    });
    
    test('should throw an error', () => {
        // Arrange
        const calc = new Calculator;
        // Act & Assert
        expect(() => calc.subtract()).toThrow(Error)
    });    
 })

 describe('Calculator multiply() method', () => {
    test('should multiply number', () => {
        // Arrange
        const calc = new Calculator;
        // Act
        const sum = calc.multiply(5)
        // Assert
        expect(sum).toBe(0)
    });
    
    test('should change string to number and multiply it', () => {
        // Arrange
        const calc = new Calculator;
        // Act
        const sum = calc.multiply("5")
        // Assert
        expect(sum).toBe(0)
    });
    
    test('should throw an error', () => {
        // Arrange
        const calc = new Calculator;
        // Act & Assert
        expect(() => calc.multiply()).toThrow(Error)
    });
})

describe('Calculator divide() method', () => {
    test('should divide number', () => {
        // Arrange
        const calc = new Calculator;
        // Act
        const sum = calc.divide(5)
        // Assert
        expect(sum).toBe(0)
    });
    
    test('should change string to number and multiply it', () => {
        // Arrange
        const calc = new Calculator;
        // Act
        const sum = calc.divide("5")
        // Assert
        expect(sum).toBe(0)
    });
    
    test('should throw an error', () => {
        // Arrange
        const calc = new Calculator;
        // Act & Assert
        expect(() => calc.divide()).toThrow(Error)
    });
})