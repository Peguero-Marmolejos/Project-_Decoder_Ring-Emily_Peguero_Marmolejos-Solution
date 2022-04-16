// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");


describe("substitution()", ()=>{
    input = "you are an excellent spy";
    output = "elp xhm xf mbymwwmfj dne";
    alphabet = "xoyqmcgrukswaflnthdjpzibev";

    scInput = "message";
    scOutput = "y&ii$r&";
    scAlphabet = "$wae&zrdxtfcygvuhbijnokmpl";

    it("should return false if there is no substitution alphabet", () =>{
        const actual = substitution("Watch it maintain");
        expect(actual).to.be.false;
    });
    it("should return false if there if the alphabet does not contain unique characters", () =>{
        const actual = substitution("Watch it maintain", "asdfghjkkkllwertqyubiopzxx");
        expect(actual).to.be.false;
    });
    it("should return false if the alphabet is not exactly 26 characters", () =>{
        const actual = substitution("Watch it maintain", "hhhaaasssdddfgjklzxcvbnmqwertyuiop");
        expect(actual).to.be.false;
    });
    it("should encode when given a proper alphabet, and should return a string", () =>{
        const actual = substitution(input, alphabet);
        expect(actual).to.be.a("String");
        expect(actual).to.eql(output);
    });
    it("should encode when given a proper alphabet, and should ingnore capitals", () =>{
        const actual = substitution(input, alphabet);
        expect(actual).to.be.a("String");
        expect(actual).to.eql(output);
    });
    it("should decode when given a proper alphabet, a false boolean, and should return a string", () =>{
        const actual = substitution(output, alphabet, false);
        expect(actual).to.be.a("String");
        expect(actual).to.eql(input);
    });
    it("should handle special characters upon encoding", () =>{
        const actual = substitution(scInput, scAlphabet)
        expect(actual).to.eql(scOutput);
    });
    it("should handle special characters upon decoding", () =>{
        const actual = substitution(scOutput, scAlphabet, false)
        expect(actual).to.eql(scInput);
    });
    
});
