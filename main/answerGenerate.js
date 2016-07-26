/**
 * Created by gaole on 7/26/16.
 */
'use strict';

class AnswerGenerate{
 /*   constructor(){
        let answerNumbers = [];

        for(let i = 0; i < 4; i++){
            answerNumbers.push(Math.floor(Math.random()*10));
        }
        this.answerStr = answerNumbers.reduce((pre, next) => pre + ""+ next);
    }*/
    
    static generate(){
        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = [];
        
        for(let i = 0; i < 4; i++){
            const randomNumber = parseInt(Math.random()*digits.length);
            result.push(digits.splice(randomNumber, 1)[0]);
        }
        
        return result;
    }
}

module.exports = AnswerGenerate;