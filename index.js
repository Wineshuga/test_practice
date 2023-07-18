function stringLength(string) {
    let count = 0
    if (string.length >= 1 && string.length <= 10) {
        for (let i = 0; i < string.length; i++) {
            count += 1
        }
        return count
    } else {
        throw new Error("String is greater than 10")
    }
}

function reverseString(string) {
    let reverseString = ''
    for (let i = string.length-1; i >= 0; i--) {
        reverseString += string[i]
    }
    return reverseString
}

module.exports = stringLength, reverseString