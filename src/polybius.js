// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope;
  //the following var represents the polybius square, based on instructions with letters as keys and numbers as values
  const polybiusSquare = {
    a:'11','f':'12','l':'13','q':'14','v':'15',
    'b':'21',g:'22',m:"23",'r':'24','j':'42','w':'25',
    'c':'31','h':'32','n':'33',s:'34','x':'35',
    'd':'41','i':'42','o':'43','t':'44','y':'45',
    e:'51','k':'52','p':'53','u':'54','z':'55'         
  } 
  
  function polybius(input, encode = true) {
    // your solution code here
    // set the input string to an array
    let inputStringArray = input.split('');
    let encodedString="";
    if(encode){
      //for each character in the inputstring (which becomes the input aryay ln19) if the characte ris a space, add a space to the result, otherwise return the polybius value using the given character as the key
      inputStringArray.forEach(letter => {
        if(letter === " "){
          encodedString +=" ";
        }else{
          let code = polybiusSquare[letter.toLowerCase()];//using the character as a key would return a number as a string
          encodedString += code;
        }
      });
      return encodedString;
    }else{//if encode == false, decode
      let oddInput = input.replace(" ", "");//sets a copy of the inout string equal to the var oddInput, removing any spaces, so we can check if the input without spaces has an odd or even length
      if(oddInput.length%2 != 0 ) return false; //if the inout without spaces has an odd length, we mus return 'false' immediately
      else{
      let decodedString = "";
      const charKeyArray = Object.keys(polybiusSquare); //extract an array of only key values form the polybiousSquare object, which would result in an array of character values
      for(let i = 0; i<input.length; i+=2){// let 1 skipd 2 since we are evaluating pairs of characters

        let decode = input.slice(i,i+2);// evaluate the input 2 characters at a time, which should represent a pair of numbers
        
        if(decode.includes(" ")) {//if the input contains a " " then add the " to the result and keep the remaining character, while combining the next character to evaluate th eproper pair"

          decodedString += " ";
          decode = input.slice(i+1,i+3);// set the evaluating argument upn so that i is shifted over, to compensate for the " ", ||I decided to use slice instead of splice at this point
          i++;
        }
        if(decode === '42') decodedString += "(i/j)";// handling the special case of '42'
        else{
          //return the charkey in the array of key Values from polybiusSquare object, that if entered into the polybiusSquare object, would return a charpair value equal to that was sliced from thr input array
          decodedString += charKeyArray.find(charKey => {
          return polybiusSquare[charKey] === decode;
          });
        }
        
      }
      return decodedString.concat("");
    }

    }
  }
    
  
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
