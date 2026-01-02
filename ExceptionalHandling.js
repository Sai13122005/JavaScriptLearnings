//exceptional handling helps to run the code without termination when an error found 
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log(a);
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");
//the above code leads to termination with an error



{

//eg1 (with error)
console.log("hello");
console.log("hello");
console.log("hello");
try{
    console.log(a);
}
catch{
    console.log("Error found a is not defined!");
}
console.log("hello2");
console.log("hello2");
console.log("hello2");
console.log("hello2\n\n");

}


{
//eg2(without error)
console.log("hello");
console.log("hello");
console.log("hello");
let a = 5;
try{
    console.log(a);
}
catch{
    console.log("Error found a is not defined!");
}
console.log("hello2");
console.log("hello2");
console.log("hello2");
console.log("hello2");
}


// eg3 (we can print the error what it is) and it does not terminate the program in middle
//eg1 (with error)
console.log("hello");
console.log("hello");
console.log("hello");
try{
    console.log(a);
}
catch(err){
    console.log("Error found a is not defined!");
    console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");
console.log("hello2\n\n");