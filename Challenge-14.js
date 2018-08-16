//https://app.codesignal.com/profile/tommy
function digitRootSort(a) {
    //constraintes
    if (Array.isArray(a) && a.every((ele) => ele >= 0)) {
        let add = 0;
        let rootRes = [];

        function digitRoot(num) {
            // split number to work with
            if (num >= 10) {
                let covToSt = String(num).split("");
                //initialize add variable
                add = 0;
                for (let index_2 = 0; index_2 < covToSt.length; index_2++) {
                    add += Number(covToSt[index_2]);
                }
                if (add >= 10) {
                    //loop again to get one digit
                    digitRoot(add);
                }
                return add;
            } else {
                return num;
            }
        }
        /**Start iterate on input */
        for (let index_1 = 0; index_1 < a.length; index_1++) {
            ///pass values and push returned result
            rootRes.push(digitRoot(a[index_1]));
        }
       //collect the number and it's digit root to sort it 
        let temp = [];
        for(let i = 0; i < a.length; i++ ){
            temp.push([ a[i] ,rootRes[i] ]);
        }
         //start sorting
        temp.sort((a,b)=>{
            if(a[1] < b[1]){
                return -1;
            }else if(a[1] > b[1]){
                return 1;
            }else{
                if(a[0] < b[0]){
                    return -1;
                }else if(a[0] > b[0]){
                    return 1;
                }else{
                    return 0;
                }
            }
        });
        //initializr result array to reuse it
        rootRes = [];
        for(let i_2 = 0; i_2 < temp.length; i_2++){
            rootRes.push(temp[i_2][0]);
        }
        return rootRes;
    } else {
        return;
    }
}
//[13, 20, 7, 4]
digitRootSort([100, 22, 4, 11, 31, 103]);