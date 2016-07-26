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

    it('wrong digits', ()=>{
        input = '5678';
        const text = CompareNumber.compare(input, answer);
        const expectText = `0A0B`;

        expect(text).toEqual(expectText);
    });

    it('correct digits and wrong position', ()=>{
        input = '4123';
        const text = CompareNumber.compare(input, answer);
        const expectText = `0A4B`;

        expect(text).toEqual(expectText);
    });

    it('correct digits and wrong position', ()=>{
        input = '1235';
        const text = CompareNumber.compare(input, answer);
        const expectText = `3A0B`;

        expect(text).toEqual(expectText);
    });

    it('correct digits and wrong position', ()=>{
        input = '1243';
        const text = CompareNumber.compare(input, answer);
        const expectText = `2A2B`;

        expect(text).toEqual(expectText);
    });
});
