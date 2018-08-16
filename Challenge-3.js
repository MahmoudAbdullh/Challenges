
/*https://coderbyte.com/profile/Altomy*
**https://coderbyte.com/profile/Altomy:Letter Changes
  Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
  Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
  Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
  ==use ASCI Code For Help

*/
//My Code

function LetterChanges1(str) {
    let reg = /a|e|o|u|i/;
    let result = ''; 
    str = str.toLowerCase();
    for(let index in str){
      if(str.charCodeAt(index) >=97 && str.charCodeAt(index) <122){
        if(/a|e|o|u|i/.test(String.fromCharCode(str.charCodeAt(index)+1) ) ){
          result += (String.fromCharCode(str.charCodeAt(index)+1)).toUpperCase();
        }else{
          result += String.fromCharCode(str.charCodeAt(index)+1);
        }
        
      }else if(str.charCodeAt(index) == 122){
        //z will be A [vowel]
          result += String.fromCharCode(65);
      }else{
        result += str[index];
      }
    }
    // code goes here  
    return result; 
           
  }