'use strict';

const AnswerGenerate = require('./answerGenerate');
const CompareNumber = require('./compareNumber');

class Guess{
    static guess(input){
        const answer = AnswerGenerate.generate();
        return CompareNumber.compareNumber(input, answer);
    }
}

module.exports = Guess;