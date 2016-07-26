const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./compare-number');

class Guess{
    static guess(input){
        const  answer = AnswerGenerator.generator();
        return CompareNumber.compare(input, answer);
    }
}

module.exports = Guess;
