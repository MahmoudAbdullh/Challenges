/*https://coderbyte.com/profile/Altomy*
**https://coderbyte.com/profile/Altomy: Longest Word :JavaScript

    Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
    If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
*/

//My Code
function LongestWord(sen) { 

    // code goes here
    // regExp to avoid strange chatachters
    let words = sen.replace(/[^\w]/g, ' ').split(" ");
    let temp,swap;
    for(let index in words){
        if(index == 0){
            temp = words[index];
        }else if(index > 0 && index < words.length ){
            if(temp.length >= words[index].length){
              swap =  words[index];
              words[index] = temp;
              words[index-1] = swap;
          }else {
            temp =  words[index];
          }
      }
    }
    
    return temp; 
           
  } 