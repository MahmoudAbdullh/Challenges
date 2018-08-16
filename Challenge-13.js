/**https://app.codesignal.com/profile/tommy
 * ********************************************
 * You have some tasks in your Asana account. For each ith of them you know its deadlinesi, which is the last day by which it should be completed. As you can see in your calendar, today's date is day. Asana labels each task in accordance with its due date:

If the task is due today or it's already overdue, it is labeled as Today;
If the task is due within a week but not today - that is, its deadline is somewhere between day + 1 and day + 7 both inclusive - it is labeled as Upcoming;
All other tasks are labeled as Later;
Given an array of deadlines and today's date day, your goal is to find the number of tasks with each label type and return it as an array with the format [Today, Upcoming, Later], where Today, Upcoming and Later are the number of tasks that correspond to that label.

Example

For deadlines = [1, 2, 3, 4, 5] and day = 2, the output should be
tasksTypes(deadlines, day) = [    2,           3,         0   ].
                                            [Today, Upcoming, Later]

Today is day 2, so tasks with deadlines at 1 and 2 are labeled as Today. The other three tasks should be completed within a week, so they should be labeled as Upcoming. There are no tasks labeled as Later.



For deadlines = [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8] and day = 1, the output should be
tasksTypes(deadlines, day) = [2, 8, 2].

Today is day 1, which means that the two tasks with a deadline of 1 are labeled as Today. Tasks with deadlines 10 and 9 are labeled as Later, since their deadlines are more than 7 days ahead. The other eight tasks are labeled as Upcoming.



Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer deadlines

Guaranteed constraints:
1 ≤ deadlines.length ≤ 15,
1 ≤ deadlines[i] ≤ 15.

[input] integer day

Guaranteed constraints:
1 ≤ day ≤ 10.

[output] array.integer

An array of three elements representing the number of tasks labeled as Today, Upcoming, and Later, respectively.

[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

deadlines: [1, 2, 3, 4, 5]
day: 2
 */
function tasksTypes(deadlines, day) {
    //constraints
    /**
     *  1 ≤ deadlines.length ≤ 15,
     *  1 ≤ deadlines[i] ≤ 15.
     *  1 ≤ day ≤ 10.
     * day == ToDay
     */
    let Today = 0,
        Upcoming = 0,
        Later = 0;
    if(!Array.isArray(deadlines) && !( day>=1 && day<=15 ) &&(deadlines.length>=1&&deadlines.length<=15)){
        let checkArray = deadlines.every((params)=>params>=1&&params<=15?true : false);
        if( !checkArray){
            return ;
        }
        return;
    }else{
        //All Constraints passed
        let sortArray = deadlines.sort((a,b)=>a-b);
        for (let index = 0; index < deadlines.length; index++) {
            if(deadlines[index] <= day){
                // from 1 to day
                Today++;
            }else if(deadlines[index] >= day+1 && deadlines[index] <= day + 7){
                //from day to 8 [week]
                Upcoming++;
            }else{
                // 8+
                Later++;
            }
        }
        return [Today,Upcoming,Later];
    }
}
let deadlines = [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8];
console.log(tasksTypes([4, 14, 16],7));
//1, 1, 1


