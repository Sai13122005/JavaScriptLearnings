//Qs1. Write an arrow function named arrayAverage that accepts an array of numbers
//and returns the average of those numbers.
const arrayAverage = (arr)=>{
    let total = 0;
    for(let number of arr)
    {
        total += number;
    }
    return total/arr.length;
}
let arr =  [3,6,2,8,23,2];
console.log(arrayAverage(arr));
/*Qs2. Write an arrow function named isEven() that takes a single number as argument
and returns if it is even or not.*/
const isEven = (n)=>{
    if(n%2 == 0)
    {
        return "Even";
    }
    else{
        return "Not";
    }
}
console.log(isEven(5));
console.log(isEven(2));


//Qs3. What is the output of the following code :
const object = {
    message: 'Hello, World!',
    logMessage() {
    console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);

/*Ans 3
After a delay of 1 second, undefined is logged to the console 
While the setTimeout() function uses the object.logMessage as a callback, still, it
invokes object.logMessage as a regular function, rather than a method.
And during a regular function invocation this equals the global object, which is a
window in the case of the browser environment.
That's why console.log(this.message) inside logMessage method logs
window.message, which is undefined.*/
//-------------------------------------------------
