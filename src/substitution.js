// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const englishAlphabetArray = englishAlphabet.split('');

  function substitution(input, alphabet, encode = true) {
    if(!alphabet || new Set(alphabet).size != alphabet.length || alphabet.length !=26 ) return false;
    input = input.toLowerCase();

    if(encode){
      let result ="";
      for(let i =0; i < input.length; i++){
        if(input[i]===" ") result+= " ";
        else {
          let indexValue = (englishAlphabet.indexOf(input[i]));
          result +=  alphabet[indexValue];
        }
      }
      return result;
      
    }else{
      let result ="";
      for(let i =0; i < input.length; i++){
        if(input[i]===" ") result+= " ";
        else {
          let indexValue = (alphabet.indexOf(input[i]));
          result +=  englishAlphabet[indexValue];
        }
      }
      return result;
      

    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
