// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    // create an alphabet to reference
    const americanAlphabet = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    let code = [];
    let inputArray = input.toUpperCase().split(''); //turn the input string into an array
    

    if(shift === 0 || shift > 25 || shift < -25|| shift === undefined) return false;
    
    else{
      if (encode){// encode = true
      
        // my method is to split the alphabet array at a given Index then move the newly split part to the other end of the array, thus reating 'new' alphabet
        const newCypher1 = americanAlphabet.slice(0, shift);
        const newCypher2 = americanAlphabet.slice(shift);
        const newCypher = newCypher2.concat(newCypher1);// creating the new Alphabet based on the shiftValue*/
    
        let result ="";
  
        //for each character in the input(that became an entry in the inputArray), find where the index value is in the original Alphabet
        inputArray.forEach(inputChar => {
            let indexVal = americanAlphabet.findIndex(letter => letter === inputChar);
            if(indexVal === -1) code.push(inputChar);// if indexVal = 1, meaning the character is a non-letter then push the character on the Array as is
            else{
              code.push(newCypher[indexVal]);//use the indexvalue of the character in the original Alphabet, to find the new value at the same indexValue in the 'new alphabet'
            }
        });
      }else{ //decode when encode = false
        //for each character in the input(that became an entry in the inputArray), find where the index value is in the original Alphabet
        inputArray.forEach(inputChar => {
          let indexVal = americanAlphabet.findIndex(letter => letter === inputChar);
          if(indexVal === -1) code.push(inputChar);//meaning the character is a non-letter, so add the same character to the resulting array
            else{
              let alphabetIndex = indexVal - shift + americanAlphabet.length; //the decodingIndex value is equal to the American index value, subtracting th shift, and adding '26', the length of the original alphabet, to avoid any receiving a negative indexValue
              code.push(americanAlphabet[alphabetIndex % 26]);//'%26' with return the index Value between 0 and 26, then find the correct index Value and pull it from the original Alphabet
            }
          
        });
      }
    }
    return code.join("").toLowerCase();
  }


  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
