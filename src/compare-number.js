class CompareNumber {
    static compare(input, answer) {
        const userNumbers = input.split('');
        const answerNumbers = answer.split('');

        const getWrongPosCount = () => {
            return userNumbers.map((userNumber, index) => {
                return userNumber != answerNumbers[index] && answerNumbers.some(answerNumber => answerNumber === userNumber) ? 1 : 0
            }).reduce((pre, next) => pre + next);
        };

        const getCorrectDigits = () => {
            return userNumbers.map((userNumber, index) => userNumber === answerNumbers[index]
                ? 1 : 0).reduce((pre, next) => pre + next);
        };

        return `${getCorrectDigits()}A${getWrongPosCount()}B`;
    }
}

module.exports = CompareNumber;