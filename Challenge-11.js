/*https://coderbyte.com/profile/Altomy*
**https://coderbyte.com/profile/Altomy: Kaprekars Constant :JavaScript
*
Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.
*/

//My Code
function KaprekarsConstant(num) {

    //Format Number into 4-digites
    function nf(numString, num) {
        for (let x = numString.length; x < 4; x++) {
            numString = "0" + numString;
        }
        return numString;
    }
    //Sort Number for subtract
    function sort(numString, sType = true) {
        //sType =>Sort type[it true bydefult becouse sort return ascending || false for reverse sort[to be descending] ];

        if (typeof numString === "string" && sType) {
            //return ascending as sType true
            return parseInt(numString.split('').sort().join(''));
        } else if (typeof numString === "string" && !sType) {
            //return descending as sType false
            return parseInt(numString.split('').sort().reverse().join(''));
        } else {
            return "err";
        }
    }

    //main
    //Validate Input and start
    let inLength = String(num).length;
    if (typeof num === "number" && num > 0 && inLength <= 4) {
        let numString = String(num);
        let counter = 1;
        numString = nf(numString, num);
        let condition = sort(numString, false) - sort(numString);

        while (condition != 6174) {
            numString = String(condition);
            numString = nf(numString, condition);
            condition = sort(numString, false) - sort(numString);
            counter++;
        }
        return counter;
    } else if (typeof num === "number" && num <= 0) {
        return "Number Must be greater than zero";
    } else if (inLength > 4) {
        return 'Number of degites must be 4 or less';
    } else {

        return "please Enter Number";
    }

}
console.log(KaprekarsConstant(1));


// My code inhanced
///////////////////////////////
function KaprekarsConstant(num) {
    //Format Number into 4-digites
    function nf(numString) {

        if (numString.length < 4) {
            /*for (let x = numString.length; x < 4; x++) {
                numString = "0" + numString;
            }*/
            numString += "0".repeat(4 - numString.length);
            return numString;
        } else {
            return numString;
        }
    }
    //Sort Number for subtract
    function sort(numString, sType = true) {
        //sType =>Sort type[it true bydefult becouse sort return ascending || false for reverse sort[to be descending] ];
        if (sType) {
            //return ascending as sType true
            return parseInt(numString.split('').sort().join(''));
        } else {
            //return descending as sType false
            return parseInt(numString.split('').sort().reverse().join(''));
        }
    }

    //main
    //Validate Input and start
    if (typeof num === "number" && num > 0 && String(num).length <= 4) {
        let counter = 1;
        //condetion = GreateNumber - smallNumber;
        let condition = sort(nf(String(num)), false) - sort(nf(String(num)));
        while (condition != 6174) {
            condition = sort(nf(String(condition)), false) - sort(nf(String(condition)));
            counter++;
        }
        return counter;
    } else if (typeof num === "number" && num <= 0) {
        return "Number Must be greater than zero";
    } else if (String(num).length > 4) {
        return 'Number of degites must be 4 or less';
    } else {

        return "please Enter Number";
    }

}