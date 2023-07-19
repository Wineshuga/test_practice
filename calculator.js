class Calculator {
    constructor(sum = 0) {
        this.sum = sum
    }

    add(number) {
        if (typeof number === 'string') {
            const num = Number(number)
            this.sum += num
        } else if (number === undefined) {
            throw new Error('Please add a number')
        } else {
            this.sum += number
        }
        return this.sum 
    }

    subtract(number) {
        if (number === undefined) {
            throw new Error('Please add a number')
        } else {
            this.sum -= number
            return this.sum
        }
    }

    multiply(number) {
        if (number === undefined) {
            throw new Error('Please add a number')
        } else {
            this.sum *= number
            return this.sum
        }
    }

    divide(number) {
        if (number === undefined) {
            throw new Error('Please add a number')
        } else {
            this.sum /= number
            return this.sum
        }
    }
}

module.exports = Calculator