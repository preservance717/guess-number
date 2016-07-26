class CompareNumber{
    static compareNumber(input, answer){
        const userNumbers = input.split('');
        const answers = answer.split('');

        const getWrongPosCount = () => {
          return userNumbers.map((userNumber, index) => {
               return answers[index] != userNumber && answers.some(answerNumber=> answerNumber === userNumber)
              ? 1 :0;
          }).reduce((pre, next) => pre + next);
        };

        const getCorrectCount = () => {
            return userNumbers.map((userNumber, index) => {
               return answers[index] == userNumber ? 1 : 0;
            }).reduce((pre, next) => pre + next);
        };

        return `${getCorrectCount(userNumbers, answers)}A${getWrongPosCount(userNumbers, answers)}B`;
    }
}

module.exports = CompareNumber;