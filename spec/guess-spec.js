const Guess = require('../src/guess');
const AnswerGenerator = require('../src/answer-generator');

describe('Guess', () => {
    it('should print the game', () => {
        spyOn(AnswerGenerator, 'generator').and.returnValue('1234');
        const result = Guess.guess('1234');
        expect(result).toEqual('4A0B');
    })
});
