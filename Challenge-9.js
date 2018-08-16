/*https://coderbyte.com/profile/Altomy*
**https://coderbyte.com/profile/Altomy: Alphabet Soup :JavaScript

    Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
    Assume numbers and punctuation symbols will not be included in the string.
*/

//My Code
function AlphabetSoup(str) { 
    let arr =[];
  // code goes here 
    for(let x in str){
        arr[x] = str[x];
    }
    arr = arr.sort().join('');
  return arr; 
         
}

function AlphabetSoupa(str) { 

  return str.split('').sort().join(''); 
         
}