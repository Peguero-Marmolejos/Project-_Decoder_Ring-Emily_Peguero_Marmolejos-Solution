// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("ceasar()", ()=>{

const inputValue = -3;
const inputString = "thinkful";
const outputString = "qefkhcri";


    it("should return a encoded string", ()=>{
        const actual = caesar(inputString, inputValue);
        expect(actual).to.eql(outputString);
    });
    it("should return an decoded string", ()=>{
        const actual = caesar(outputString, inputValue, false);
        expect(actual).to.eql(inputString);
    });
    it("should return false if the shift value is not present", ()=>{
        const actual1 = caesar(inputString);
        expect(actual1).to.be.false;
        
    });
    it("should return false if the shift value is 0", ()=>{
        const actual1 = caesar(inputString, 0);
        expect(actual1).to.be.false;
        
    });
    it("should return false if the shift value is greater than 25", ()=>{
        const actual3 = caesar(inputString, 27);
        expect(actual3).to.be.false;
        
    });
    it("should return false if the shift value is less than -25", ()=>{
        const actual2 = caesar(inputString, -26);
        expect(actual2).to.be.false;
    });
    it("should maintain spaces and special characters", ()=>{
        const actual2 = caesar(`$ ${inputString}`, inputValue);
        expect(actual2).to.eql(`$ ${outputString}`);
    });

    it("should ignore capital letters", ()=>{
        const actual2 = caesar(inputString.toUpperCase(), inputValue);
        expect(actual2).to.eql(outputString);
    });
    it("should handle the ends of the alphabet", ()=>{
        const actual2 = caesar("zaaaza", inputValue);
        expect(actual2).to.eql("wxxxwx");
    });
})