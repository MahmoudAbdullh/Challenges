/*
**https://app.codesignal.com/profile/tommy
    A sequence of integers is called a zigzag sequence if each of its elements is either strictly less than all its neighbors or strictly greater than all its neighbors. For example, the sequence 4 2 3 1 5 3 is a zigzag, but 7 3 5 5 2 and 3 8 6 4 5 aren't. Sequence of length 1 is also a zigzag.
    //For a = [4, 4], the output should be zigzag(a) = 1.
*/

//My Code
function zigzag(arr) {
    //Get some info checks
     /**
     * constraints
     * 2 <= array.length <= 25,
     * 0 <= array[i] <= 100
     */
    let constraints = arr.every((element) => {
        if(typeof element === "number" && 0 <= element <=100){
        return true;
        }else{
            return false;
        }
    });
    //check array type and length and numbers
    if(! Array.isArray(arr) && !constraints && (arr.length <= 2 &&arr.length <= 25)){
        //end preocess 
        return ;
    }else if(arr.length <= 2 && arr.length !==0){
        if(arr.length == 1){
            return 1;
        }else{
            if(arr[0] !== arr[1]){
                return 2;
            }else{
                return 1;
            }
        }
    }else{
        let longest = [];
        let temp = [];
        /** Start Loop */
        for(let index = 0; index < arr.length ; index ++ ){
            if(index === 0){
                console.log("first :",index);
                temp.push(arr[index]);
            }else if(index === (arr.length - 1)){
                temp.push(arr[index]);
                longest.push(temp);
            }else{
                //middle
                if( (arr[index - 1 ] - arr[index] ) > 0 && (arr[index + 1] - arr[index] ) > 0){
                    //strictly less than
                    temp.push(arr[index]);
                }else if( (arr[index - 1 ] - arr[index] ) < 0 && (arr[index + 1] - arr[index] ) < 0 ){
                    //strictly greater than
                    temp.push(arr[index]);
                }else if(arr[index] === arr[index + 1]){
                    temp.push(arr[index]);
                    //equals [escap]
                    index ++;
                    //reset
                    longest.push(temp);
                    temp = [];
                    temp.push(arr[index]); 
                }else if(arr[index] !== arr[index + 1] && arr[index] !== arr[index - 1]){
                    temp.push(arr[index]);
                    longest.push(temp);
                    temp = [];
                   temp.push(arr[index]);

                }
            }
        }
        /**End Loop */
        //sort array to get longest at index 0
        let getLongest = longest.sort((a, b) => {
            return b.length - a.length;
        });
       // console.log(getLongest);
        return getLongest[0].length;
    }
}
//a: [2, 1, 4, 4, 1, 4, 4, 1, 2, 0, 1, 0, 0, 3, 1, 3, 4, 1, 3, 4]
//expected 6
let a = [2, 1, 4, 4, 1, 4, 4, 1, 2, 0, 1, 0, 0, 3, 1, 3, 4, 1, 3, 4];
//zigzag(a);
console.log(zigzag(a));
