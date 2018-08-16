/**https://app.codesignal.com/profile/tommy
 * Given a matrix (i.e. an array of arrays), find its submatrix obtained by deleting the specified rows and columns.

Example

For

matrix = [[1, 0, 0, 2], 
          [0, 5, 0, 1], 
          [0, 0, 3, 5]]
rowsToDelete = [1], and columnsToDelete = [0, 2], the output should be

constructSubmatrix(matrix, rowsToDelete, columnsToDelete) = [[0, 2],
                                                             [0, 5]]
Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer matrix

2-dimensional array of integers.

Guaranteed constraints:
1 ≤ matrix.length ≤ 5,
1 ≤ matrix[0].length ≤ 5,
0 ≤ matrix[i][j] ≤ 15.

[input] array.integer rowsToDelete

Array of indices (0-based) of rows to be deleted.

Guaranteed constraints:
0 ≤ rowsToDelete.length ≤ 2,
0 ≤ rowsToDelete[i] < matrix.length.

[input] array.integer columnsToDelete

Array of indices (0-based) of columns to be deleted.

Guaranteed constraints:
0 ≤ columnsToDelete.length ≤ 2,
0 ≤ columnsToDelete[i] < matrix[0].length.

[output] array.array.integer
 */
function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
    // constraints on matrix
    let matrixLen = matrix.length;
    let rowOneLen = matrix[0].length;
    let matrixValCheck = matrix.every((row)=>{
        return row.every((ele)=>{
            return ele >= 0 && ele <= 15;
        });
    });
    //constraints on rows
    let rowsToDeleteLength = rowsToDelete.length >= 0 && rowsToDelete.length <= 2;
    let rowsToDeleteItems = rowsToDelete.every((ele)=>{return ele >= 0 && ele < matrixLen});
    //constraints on cols
    let columnsToDeleteLength = columnsToDelete.length >= 0 && columnsToDelete.length <= 2;
    let columnsToDeleteItems = columnsToDelete.every((ele)=>{return ele >= 0 && ele < rowOneLen});
    
    if(matrixLen >=1 &&matrixLen <=5 &&rowOneLen >=1 &&rowOneLen <=5 &&matrixValCheck &&rowsToDeleteLength &&rowsToDeleteItems &&columnsToDeleteLength&&columnsToDeleteItems){
        //delete row 
        for(let rows = 0; rows < rowsToDelete.length; rows++){
          matrix.splice(rowsToDelete[rows],1);
        }
        //delete columns
        for(let cols = 0; cols < columnsToDelete.length; cols++){
            for(let mCount = 0; mCount < matrix.length; mCount++){
                matrix[mCount].splice(columnsToDelete[cols + 1],1);
            }
        }
        return matrix;
    }else{
        //console.log("there is err");
        
        return ;
    }
}

