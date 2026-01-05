
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

// let input= document.querySelector("input");
// let btn = document.querySelector(".add");
// let ul = document.querySelector("ul");
// btn.addEventListener("click", function()
// {
//     let li = document.createElement("li");
//     li.innerText = input.value;
//     let delbtn = document.createElement('button');
//     delbtn.innerText = "delete";
//     delbtn.classList.add("delete");
//     li.appendChild(delbtn);
//     ul.appendChild(li);
//     input.value = "";
// });
// let delBtns = document.querySelectorAll('.delete');
// for(but of delBtns)
// {
//     but.addEventListener("click", function()
//     {
//         let parent = this.parentElement;
//         //console.log(parent);
//         parent.remove();
//     });
// } 

// problem in above code:- 
// Event Listeners on New Elements: The loop let delBtns = document.querySelectorAll('.delete'); 
// only selected buttons that existed when the script initially ran.
// Buttons created dynamically (after the page loads, when you click "Add") were not included in that selection and 
// therefore had no event listener attached.


//this can be overcome by :

// let input= document.querySelector("input");
// let btn = document.querySelector(".add");
// let ul = document.querySelector("ul");
// btn.addEventListener("click", function()
// {
//     let li = document.createElement("li");
//     li.innerText = input.value;
//     let delbtn = document.createElement('button');
//     delbtn.innerText = "delete";
//     delbtn.classList.add("delete");
//     delbtn.addEventListener("click", function(event)
//     {
//         (event.target.parentElement).remove();
//     });
//     li.appendChild(delbtn);
//     ul.appendChild(li);
//     input.value = "";
// });
// by above code we couldn't delete buttons that are there in html ("eat", "walk") because event listener logic is only inside the "click" function of the "Add" button

//or it can be solved by event delegation

// Event delegation is a JavaScript pattern where a single event listener on a parent element handles events for multiple child elements,
//  using event bubbling to catch events as they travel up the DOM. Instead of adding listeners to many children (e.g., list items),
//   you add one to their parent (e.g., a <ul>), which listens for the event and then checks the event.target to identify the specific child that triggered it, 
//   improving performance and handling dynamic content. 
let input= document.querySelector("input");
let btn = document.querySelector(".add");
let ul = document.querySelector("ul");
btn.addEventListener("click", function()
{
    let li = document.createElement("li");
    li.innerText = input.value;
    let delbtn = document.createElement('button');
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    li.appendChild(delbtn);
    ul.appendChild(li);
    input.value = "";
});
ul.addEventListener("click", function(event)
{
    if(event.target.nodeName == "BUTTON")
    {
        (event.target.parentElement).remove();//event.target says which child is trigged (here which button is trigged)
    }
});
