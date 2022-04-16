// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");


describe("polybius()", ()=>{
    encode = "thinkful";
    decode = "4432423352125413";

    it("should maintain spaces", () =>{
        const actual = polybius("Watch it maintain");
        expect(actual).to.include(" ");
    });
    it("should return a string when encoding", () =>{
        const actual = polybius(encode)
        expect(actual).to.be.a("String");
    });
    it("should ignore capital letters", () =>{
        const actual = polybius(encode.toUpperCase())
        expect(actual).to.eql(decode);
    });
    it("should return both i and j upon decoding", () =>{
        const actual = polybius(decode, false)
        expect(actual).to.eql("th(i/j)nkful");
    });
});
