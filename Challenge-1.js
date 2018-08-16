/*https://coderbyte.com/profile/Altomy*
**https://coderbyte.com/profile/Altomy:First Factorial

 * Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it 
 * (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, 
 * the range will be between 1 and 18 and the input will always be an integer. 
 *
 */

//My Code

function FirstFactorial(num) { 

    // code goes here 
    if(typeof num != 'number'){
        return 'number must be integer';
    }else if(num == 1){
        return num;
    }else{
      return num*FirstFactorial(num-1);
    }
           
  }
