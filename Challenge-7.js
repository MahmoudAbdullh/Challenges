/*https://coderbyte.com/profile/Altomy*
**https://coderbyte.com/profile/Altomy: Check Nums :JavaScript

    Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, 
    otherwise return the string false. If the parameter values are equal to each other then return the string -1. 

*/

//My Code

function CheckNums(num1,num2) { 

    // code goes here
    if(num1>num2){
      return false    
    }else if(num1 < num2){
        return true
    } else{
        return "-1"
    }
    return num1 + num2; 
           
  }