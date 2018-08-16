/*https://coderbyte.com/profile/Altomy*
**https://coderbyte.com/profile/Altomy: Letter Capitalize :JavaScript
    Using the JavaScript language, 
    have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
    Words will be separated by only one space. 

    "hello words here" ==> willbe ==>"Hello World Here"
*/

//My Code
function LetterCapitalize(str) { 

    // code goes here
    let arr = str.split(' ');
    for(let index =0; index < arr.length;index++){
        arr[index] = arr[index][0].toUpperCase() + arr[index].substr(1);
    }
    return arr.join(" "); 
           
  };
     

function LetterCapitalize(str) { 
  
    // split the string into an array
    var words = str.split(" ");
  
    // we split the word into two parts and then combine the parts 
    // the first part is the first letter which we capitalize and the 
    // second part is the rest of the string
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
    }
  
    // return the array of words joined into a string
    return words.join(" ");
           
  };


  //soluation 2 using regEX
  function LetterCapitalize(str) { 
  
    // our regex [a-z] matches every alphabetic character in the string
    // but the \b before it specifies a word boundary, in other words, nothing can 
    // come before those letters therefore selecting every word in the string
    return str.replace(/\b[a-z]/gi, function(char) { 
      return char.toUpperCase();
    });
           
  };