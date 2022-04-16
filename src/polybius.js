// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope;
  const polybiusSquare = {
    a:'11','f':'12','l':'13','q':'14','v':'15',
    'b':'21',g:'22',m:"23",'r':'24','j':'42','w':'25',
    'c':'31','h':'32','n':'33',s:'34','x':'35',
    'd':'41','i':'42','o':'43','t':'44','y':'45',
    e:'51','k':'52','p':'53','u':'54','z':'55'         
  } 
  
  function polybius(input, encode = true) {
    // your solution code here
    let inputStringArray = input.split('');
    let encodedString="";
    if(encode){
      inputStringArray.forEach(letter => {
        if(letter === " "){
          encodedString +=" ";
        }else{
          let code = polybiusSquare[letter.toLowerCase()];
          encodedString += code;
        }
      });
      return encodedString;
    }else{
      let oddInput = input.replace(" ", "");
      if(oddInput.length%2 != 0 ) return false;
      else{
      let decodedString = "";
      const charKeyArray = Object.keys(polybiusSquare);
      for(let i = 0; i<input.length; i+=2){

        let decode = input.slice(i,i+2);
        
        if(decode.includes(" ")) {

          decodedString += " ";
          decode = input.slice(i+1,i+3);
          i++;
        }
        if(decode === '42') decodedString += "(i/j)";
        else{
          
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
