
// ___________________Console based_____________________________________________ 

// const tasks = [];
// // let req = prompt("Enter your request");
// while(true)
// {
//     let req = prompt("Enter your request");
//     if(req == "quit")
//     {
//         alert("Quitting the app");
//         break;
//     }
//     else if(req == "add")
//     {
//         let task = prompt("Enter your Task: ");
//         tasks.push(task);
//         console.log("Added");
//     }
//     else if(req == "list")
//     {
//         console.log('------------------');
//         for(let i = 0; i < tasks.length; i++)
//         {
//             console.log(i, tasks[i]);
//         }
//         console.log('-------------------');
//     }
//     else if(req == 'delete')
//     {
//         let idx = prompt("Enter index to delete: ");
//         tasks.splice(idx, 1);
//         console.log('Deleted');
//     }
//     else{
//         alert("Invalid request");
//     }
// }


// ____________________DOM Based______________________________________

let input= document.querySelector("input");
let btn = document.querySelector(".add");
let ul = document.querySelector("ul");
btn.addEventListener("click", function()
{
    let li = document.createElement("li");
    if(input.value != "")
    {
        li.innerText = input.value;
        ul.appendChild(li);
        input.value = "";
    }
    let button = document.createElement("button");
    button.innerText = 'Delete';
    button.classList.add("delete");
    li.appendChild(button);
});
