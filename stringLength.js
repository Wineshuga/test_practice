function stringLength(string) {
    let count = 0
    if (string.length >= 1 && string.length <= 10) {
        for (let i = 0; i < string.length; i++) {
            count += 1
        }
    }

    return count
}

module.exports = stringLength