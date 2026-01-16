//js is single threaded language means while excecution only one line is executed at once
//but using call backs we can use like a multi threaded 
//for eg:
// setTimeout(()=>{
//     console.log("Saikrishna");
// },2000);
// console.log("Hello");

//here first prints hello then after 2 seconds prints Saikirshna 
//here js does not wait for 2 sec but browser will wait
//because browser is multi threaded
// js is synchronus in nature means execution happens line by line

//but we can also use asynchronus nature using som functions like above


//_______________call back hell__________________________________


// "Callback hell" is a term used in JavaScript programming to describe a situation where multiple nested callback functions make the code difficult to read, debug, and maintain.
//  This deep nesting structure often resembles a pyramid or a "pyramid of doom" and typically occurs when managing a sequence of dependent asynchronous operations. 
// Why it Occurs
// In JavaScript, asynchronous operations (like fetching data from an API, reading files, or setting timers) often use callback functions to execute code after the operation is complete. 
// When several of these operations need to run in a specific sequence, and each subsequent operation depends on the results of the previous one, developers may nest the callbacks, leading to the unmanageable structure known as callback hell.

//eg
//let h1 = document.querySelector("h1");
//__________________________________________________________________
//to change color of h1
//h1.style.color = 'red';

// //to change color of h1 to red after 1sec
// setTimeout(()=>{h1.style.color = 'red'}, 1000);

// //to change color of h1 from red to orange after 2 sec
// setTimeout(()=>{h1.style.color = 'orange'}, 2000);

// //to change color of h1 from orange to green after 3 sec
// setTimeout(()=>{h1.style.color = 'green'}, 3000);
//________________________________________________________________

//better of writing the same

// function changeColor(color)
// {
//     h1.style.background = color;
// }


// //to change color of h1 to red after 1sec
// setTimeout(changeColor("red"), 1000);

// //to change color of h1 from red to orange after 2 sec
// setTimeout(changeColor("orange"), 3000);

// //to change color of h1 from orange to green after 3 sec
// setTimeout(changeColor("yellow"), 4000);


// above will not work

//this works:
// function changeColor(color, delay)
// {
//     setTimeout(()=>{h1.style.color = color;}, delay);
// }

// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);
//but the above is not good to use because the sequence should dependent on next sequence

//for that :

// function changeColor(color, delay, nextColor)
// {
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColor) nextColor();
//     }, delay);
// }

// changeColor("red", 1000, ()=>{
//     changeColor("orange", 1000, ()=>{
//         changeColor("green", 1000);
//     });
// });

//the above nested callback phenomenon is called callback hell
// in above the performance of function depends on previous function callback
// this is useful in database managing and api calls

//to overcome this callback hell we use Promises

//Promises :
//  the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value


// function saveToDb(data, success, failure)
// {
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// saveToDb("saikrishna",  ()=>{
//     console.log("Your data is saved");
// },()=>{
//     console.log("Weak connection. data not saved");
// });


//if we want to save another data after previous one is succed
//_____________________________________________________________________________________________________________
//realtime example

// function saveToDb(data, success, failure)
// {
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// saveToDb("saikrishna",  ()=>{
//     console.log("Success1: Your data is saved");
//     saveToDb("hello", ()=>{
//         console.log("Success2: Your data is saved");
//         saveToDb("krishna", ()=>{
//             console.log("Success3: Your data is saved");
//         }, ()=>{
//             console.log("failure3: Weak connection. data not saved");
//         });

//     }, ()=>{
//         console.log("failure2: Weak connection. data not saved");
//     });
// },()=>{
//     console.log("failure: Weak connection. data not saved");
// });


// here we can observe callback hell
//to resolve this we can use promises

//____________________________________________________________________________________________________


//Promises :
//  the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

//promise:
//      1)resolve(success)
//      2)reject(failure)

// function saveToDb(data)
// {
//     return new Promise((resolve, reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4)
//         {
//             resolve("success: data saved");
//         }
//         else{
//             reject("Failure: weak connection");
//         }
//     });  
// }


//console.dir(saveToDb("krishna")); // it return a promise
//we can print on console tab



// methods of promise object: then(), catch()


//then() method is used execute a work after promise fulfilled
//catch() method is used execute a work after promise rejected
// let request = saveToDb("Krishna");

// request.then(()=>{
//     console.log("Promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("Promise was rejected");
//     console.log(request);
// })


// we can also write as:
// saveToDb("Krishna")
//     .then(()=>{
//         console.log("Promise was resolved");
//     })
//     .catch(()=>{
//         console.log("Promise was rejected");
//     })


//we can use multiple thens which is called as promise chaining

// saveToDb("Krishna")
//     .then(()=>{
//         console.log("data1 saved");
//         saveToDb("hello").then(()=>
//         {
//             console.log("data2 saved");
//         });
//     })
//     .catch(()=>{
//         console.log("Promise was rejected");
//     })

//improved version:

// saveToDb("Krishna")
//     .then(()=>{
//         console.log("data1 saved");
//         return saveToDb("hello");
//     })
//     .then(()=>{
//         console.log("data2 saved");
//         return saveToDb("world");
//     })
//     .then(()=>{
//         console.log("data3 saved");
//     })
//     .catch(()=>{
//         console.log("Promise was rejected");
//     })

//we can also use aruguments for then() and catch to get result from resolved promise and error from rejected promise

// saveToDb("Krishna")
//     .then((result)=>{
//         console.log("Result: ", result);
//         console.log("data1 saved");
//         return saveToDb("hello");
//     })
//     .then((result)=>{
//         console.log("Result: ", result);
//         console.log("data2 saved");
//         return saveToDb("world");
//     })
//     .then((result)=>{
//         console.log("Result: ", result);
//         console.log("data3 saved");
//     })
//     .catch((error)=>{
//         console.log("Error: ", error)   ;
//         console.log("Promise was rejected");
//     })

//________________________________________________________________________________________________________


//refactoring of above color code using promise

let h1 = document.querySelector("h1");
function changeColor(color, delay)
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color changed!");
        }, delay);
    });
}

changeColor("red", 1000)
.then((result)=>{
    console.log(result);
    return changeColor("orange", 1000);
})
.then((result)=>{
    console.log(result);
    return changeColor("yellow", 1000);
})
.then((result)=>{
    console.log(result);
})