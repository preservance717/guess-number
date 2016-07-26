const AnswerGenerator = require('../src/answer-generator');

describe('generator answer', () => {
    it('should generate answer', () => {
        const isUnique = (item, index,array) =>{
          return array.lastIndexOf(item) === index;//3099
        };
        const answer = AnswerGenerator.generator();
        expect(answer.length).toEqual(4);
        expect(answer.every(isUnique)).toBeTruthy;
        expect(AnswerGenerator.generator()).not.toEqual(AnswerGenerator.generator());
    });
});
