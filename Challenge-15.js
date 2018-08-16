/**https://app.codesignal.com/profile/tommy
 * Given an integer size, return an array containing each integer from 1 to size in the following order:

1, size, 2, size - 1, 3, size - 2, 4, ...

Example

For size = 7, the output should be
constructArray(size) = [1, 7, 2, 6, 3, 5, 4].

Input/Output

[execution time limit] 4 seconds (js)

[input] integer size

A positive integer.

Guaranteed constraints:
1 ≤ size ≤ 15.

[output] array.integer
 */
function size(a){
   
}
// [1, 7, 2, 6, 3, 5, 4].

function constructArray(size) {
    if(Number.isInteger(size) && size >= 1 && size <=15){
        let res = [];
        let i = 0;
        let x = 1;
        for(let index =1; index <= size ;index++){
            if(Number.isInteger(index / 2) ){
                //Even
                res.push(size - i);
                i++;
            }else{
                //odd
                res.push(x);
                x++;
            }
        }
        return res;
    }else{
        return;
    }
}

console.log(constructArray(7));
