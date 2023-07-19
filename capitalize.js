const capitalize = (str) => {
    if (str.length < 1) {
        throw new Error('Add some letters. Blank spaces are not allowed')
    } else if (typeof str !== 'string') {
        throw new Error('Input should be letters')
    } else {
        let firstChar = str.charAt(0).toUpperCase()
        let otherChars = str.slice(1)
        return firstChar + otherChars
    }
}

module.exports = capitalize