/*https://coderbyte.com/profile/Altomy*
**https://coderbyte.com/profile/Altomy:Simple Adding:JavaScript
    Have the function SimpleAdding(num) add up all the numbers from 1 to num. 
    For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000. 
*/

//My Code
function SimpleAdding(num) { 
    let res = 0;
    for (let st = 1;st<=num;st++){
        res+=st;
    }
  // code goes here  
  return res; 
         
}
