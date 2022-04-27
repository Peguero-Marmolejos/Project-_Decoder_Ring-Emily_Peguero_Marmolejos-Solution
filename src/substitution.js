// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  //I set a var = to a string that contained, the english alphabet in alphabetical order
  const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    //automatically return falso if any of the 3 conditions are met
    if(!alphabet || new Set(alphabet).size != alphabet.length || alphabet.length !=26 ) return false;
    input = input.toLowerCase();

    if(encode){
      let result ="";
      for(let i =0; i < input.length; i++){// begins the iteration through the input string
        if(input[i]===" ") result+= " ";// ignore " " as a character, simply add it to the return value
        else {
          // set a var named indexValue equal to the 'current input character' (since we are iterating through the input string) index value in the original 'englidhAlphabet' string
          let indexValue = (englishAlphabet.indexOf(input[i]));

          //adding the givenAlphabets character value at the indexValue from the original alphabet String
          result +=  alphabet[indexValue];
        }
      }
      return result;
      
    }else{// decode, when encode = false
      let result ="";
      for(let i =0; i < input.length; i++){// iterate through input string
        if(input[i]===" ") result+= " ";// ignoring spaces 
        else {
          // set a var named indexValue equal to the 'current input character' (since we are iterating through the input string) index value in the given 'Alphabet' string
          let indexValue = (alphabet.indexOf(input[i]));

          //adding theoriginal english Alphabets character value at the indexValue from the given alphabet String
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
