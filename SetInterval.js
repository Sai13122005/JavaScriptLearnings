// it will excecute multiple times
 
let id = setInterval(() => {
    console.log("hello");
}, 2000);
 //console.log(id);
let id2 = setInterval(() => {
    console.log("Saikrishna");
}, 3000);
 //console.log(id2);
clearInterval(id2);