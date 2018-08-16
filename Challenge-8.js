/*https://coderbyte.com/profile/Altomy*
**https://coderbyte.com/profile/Altomy: Time Convert :JavaScript
    Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts 
    to (ie. if num = 63 then the output should be 1:3).
     Separate the number of hours and minutes with a colon. 
*/

//My Code
function TimeConvert(num) { 
    if(typeof num ==='number'){
        return Math.floor(num/60) + ':' + num%60;   
    }else{
        return 'input must be number';
    }
}
