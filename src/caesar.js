// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    // your solution code here
    const americanAlphabet = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let code = [];
    let inputArray = input.toUpperCase().split('');
    

    if(shift === 0 || shift > 25 || shift < -25|| shift === undefined) return false;
    
    else{
      if (encode){// encode = true
      
        const newCypher1 = americanAlphabet.slice(0, shift);
        const newCypher2 = americanAlphabet.slice(shift);
        const newCypher = newCypher2.concat(newCypher1);// creating the new Alphabet based on the shiftValue*/
    
        let result ="";
  
        inputArray.forEach(inputChar => {
            let indexVal = americanAlphabet.findIndex(letter => letter === inputChar);
            if(indexVal === -1) code.push(inputChar);//meaning the character is a non-letter
            else{
              code.push(newCypher[indexVal]);//if the char is an American letter 
            }
        });
      }else{ //decode
        
        inputArray.forEach(inputChar => {
          let indexVal = americanAlphabet.findIndex(letter => letter === inputChar);
          if(indexVal === -1) code.push(inputChar);//meaning the character is a non-letter
            else{
              let alphabetIndex = indexVal - shift + americanAlphabet.length;
              
              code.push(americanAlphabet[alphabetIndex % 26]);//if the char is an American letter 
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
