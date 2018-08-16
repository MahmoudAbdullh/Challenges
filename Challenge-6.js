/*https://coderbyte.com/profile/Altomy*
**https://coderbyte.com/profile/Altomy: Simple Symbols :JavaScript

    Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and 
    determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them 
    (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. 
    So the string to the left would be false. The string will not be empty and will have at least one letter


*/

//My Code
function SimpleSymbols(str) {
  var str = '=' + str + '=';
  // loop through entire string
  for (var i = 0; i < str.length; i++) {

    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      // check to see if a + symbol is to the left and right
      // if not, then we know this string is not valid
      if (str[i - 1] !== '+' || str[i + 1] !== '+') {
        return false;
      }

    }

  }

  return true;
}