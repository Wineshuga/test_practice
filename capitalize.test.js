const cap = require('./capitalize')

describe('Capitalize strings', () => { 
    test('should take a string as an argument', () => { 
        // Arrange
        const text = 12345

        // Act
        // Assert
        expect(() => cap(text)).toThrow(Error)
     })

     test('should capitalize first character of string', () => { 
        // Arrange
        const text = "winnie"

        // Act
        const example = cap(text)

        // Assert
        expect((example)).toBe("Winnie")
     })

     test('should act for string to be of length greater than 0', () => { 
        // Arrange
        const text = ""

        // Act
        // Assert
        expect(() => cap(text)).toThrow(Error)
     })
 
 })