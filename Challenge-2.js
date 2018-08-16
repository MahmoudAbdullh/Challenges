
/*https://coderbyte.com/profile/Altomy*
**https://coderbyte.com/profile/Altomy:First Reverse:JavaScript
  Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
   *For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 

*/

//My Code

function FirstReverse(str) { 

  if(typeof str != 'string'){
      return 'input must be string';
  }else if(str === ''){
      return str
  }else{
     let x='';
    for(let index =str.length;index>0 ;index--){
         x += str[index-1];
    }
    return x;
  }
// code goes here  

}
 
