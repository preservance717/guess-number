'use strict';

const CompareNumber = require('../main/compareNumber');

describe('guess number', () => {
    let input;
    const answer = '1234';

    it('should print OAOB when input = 5678', () => {
        input = '5678';
        
        const flag = CompareNumber.compareNumber(input, answer);
        const expectFlag = '0A0B';
        
        expect(flag).toEqual(expectFlag);
    });
});