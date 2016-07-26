const CompareNumber = require('../src/compare-number');

describe('compare number', () => {
    const answer = '1234';
    let input;

    it('correct digits and correct position', ()=>{
        input = '1234';
        const text = CompareNumber.compare(input, answer);
        const expectText = `4A0B`; 
        
        expect(text).toEqual(expectText);
    });

    it('correct digits and correct position', ()=>{
        input = '5678';
        const text = CompareNumber.compare(input, answer);
        const expectText = `0A0B`;

        expect(text).toEqual(expectText);
    });
});
