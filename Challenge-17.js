/**https://app.codesignal.com/profile/tommy
Asana is exploring a smart-workload feature designed to streamline task assignment between coworkers. Newly created tasks will be automatically assigned to the team member with the lightest workload. For the ith person, the following information is known:

namesi - their name, a string containing only uppercase and lowercase letters;
statusesi - their vacation indicator status, which is true if the person is on a vacation, or false otherwise;
projectsi - the number of projects they are currently involved in;
tasksi - the number of tasks assigned to them.
If a person's vacation indicator value is set to true, this means they are on vacation and cannot be assigned new tasks. Conversely, a vacation indicator value of false means they are open to receive task assignments.

Asana sorts team members according to their availability. Person A has a higher availability than person B if they have fewer tasks to do than B, or if these numbers are equal but A has fewer assigned projects than B. Put another way, we can say that person A has a higher availability than person B if their (tasks, projects) pair is less than the same pair for B.

Your task is to find the name of the person with the highest availability. It is guaranteed that there is exactly one such person.

Example

For names = ["John", "Martin"], statuses = [false, false],
projects = [2, 1], and tasks = [16, 5],
the output should be
smartAssigning(names, statuses, projects, tasks) = "Martin".

The arguments represent information about two team members:

"John", with status = false, projects = 2 and tasks = 16;
"Martin", with status = false, projects = 1 and tasks = 5.
Here John and Martin's vacation indicators are both false, so both of them are open to new assignments. Martin is only assigned 5 tasks while John is assigned 16, so Martin has the highest availability.

For names = ["John", "Martin"], statuses = [false, true],
projects = [2, 1], and tasks = [6, 5],
the output should be
smartAssigning(names, statuses, projects, tasks) = "John".

The arguments stand for the following team members:

"John", with status = false, projects = 2 and tasks = 1;
"Martin", with status = true, projects = 1 and tasks = 5.
In this example Martin cannot be assigned any new tasks because his vacation indicator is true. Therefore, "John" has the highest availability.

For names = ["John", "Martin"], statuses = [false, false],
projects = [1, 2], and tasks = [6, 6],
the output should be
smartAssigning(names, statuses, projects, tasks) = "John".

In this case:

"John", with status = false, projects = 1 and tasks = 6;
"Martin", with status = false, projects = 2 and tasks = 6.
Both John and Martin's vacation indicators are false, and the number of tasks each of them is assigned is 6. However, John is only involved in 1 project, while Martin is involved in 2, meaning that John has the highest availability.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string names

An array of team members' names.

[input] array.boolean statuses

An array of team members' vacation indicators, where statuses[i] corresponds to the ith team member: if statuses[i] = true, the ith member is on a vacation. Otherwise, they're free to take the task.

[input] array.integer projects

An array of the number of projects each team member is involved in, where projects[i] corresponds to the ith team member.

[input] array.integer tasks

An array of the number of tasks each team member is assigned to, where tasks[i] corresponds to the ith team member.

[output] string

The name of the person with the highest availability.
 */
//statuses, projects, tasks
function smartAssigning(names, statuses, projects, tasks) {
    let checkIsArray = Array.isArray(names) &&Array.isArray(statuses) &&Array.isArray(projects) &&Array.isArray(tasks) ;
    //group input into one array
    let inputGroup = new Array(names,statuses,projects,tasks),
        newInputGroup = new Array(),
        temp = new Array();
    //all have the same length
    for(let index =0;index < inputGroup[0].length; index++){
        for(let i = 0; i< inputGroup.length; i++){
            temp.push(inputGroup[i][index]);
        }
        newInputGroup.push(temp);
        temp=[];
    }
    //arange in object
    temp = [];
    for(let index =0;index < newInputGroup.length; index++){
        // group every person info into object
        temp.push({
            name:newInputGroup[index][0],
            inVacation:newInputGroup[index][1],
            projects:newInputGroup[index][2],
            tasks:newInputGroup[index][3]
        });
    }
    //sorting
    let sortedNames = temp.sort((a,b)=>{
        if(a.inVacation){
            //a in vication
            return 1;
        }else if(b.inVacation){
            //b in vication
            return -1;
        }else{
            //tow in work
            //check tasks
            if(a.tasks < b.tasks){
                return -1;
            }else if(a.tasks > b.tasks){
                return 1;
            }else{
                //equals in tasks
                //check projects
                if(a.projects < b.projects){
                    return -1;
                }else if(a.projects > b.projects){
                    return 1;
                }else{
                    //all is equals
                    return 0;
                }
            }
        }
    });
    //first element is the the highest availability.
   return sortedNames[0].name
}
let names = ["John", "Martin"], statuses = [false, true],
projects = [2, 1], tasks = [16, 5]
console.log(smartAssigning(names, statuses, projects, tasks));
/**
 *  for(let index =0;index < info[0].length; index++){
        for(let i = 0; i< info.length; i++){
            newNames.push({
                name:info[i]
            });
        }
    }
 */