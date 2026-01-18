//api is in the form of JSON
//JSON file contains data in string form 
//to use JSON file data in js we have to use JSON.parse(file_name);
//it converts JSON data into a js Object
//eg:-
// let data = '{"message": "https://images.dog.ceo/breeds/doberman/n02107142_14425.jpg","status": "success"}'

// let validRes = JSON.parse(data);
// console.log(validRes);

// let div = document.querySelector("div");
// let image = document.createElement("img");
// image.src = validRes.message;
// console.dir(image.src);
// div.appendChild(image);

//from js object to JSON :
//for it we use JSON.stringify(json)

//eg
// let student = {
//     name: "Saikrishna",
//     course:"Imtech"
// };
// console.log(student.name);//it shows name
// let api = JSON.stringify(student);
// console.log(api.name);//it shows undefined


//____________________________________Testing API requests___________________________________

//tools :
//      Hoppscoth (online)(www.hoppscoth.io);
//      postman (old one and it should be downloaded)
// but both works same


//Ajax(Asynchronus JavaScript and XML) : during api calls i.e req and response are in asynchronus

//HTTPS verbs: 
//          GET: taking information from api
//          POST: posting some data along with api request
//          DELETE: 


//Status Codes:

//  200 : OK
//  404 : Not found
//  400: Bad Request
//  500: Internel Server Error
//and more(we can read in (Status codes mdn))


//additional information in URLs

//Query Strings :

//eg: http://www.google.com/search?q=mango
//here mango is query string

//http Headers:
//metaData : data about data

/*
HTTP headers are key-value pairs of metadata sent with HTTP requests and responses, providing essential context about the communication, like content types, caching, authentication, and browser details, ensuring smooth and efficient data transfer between clients (browsers) and servers. 
They act as invisible instructions, helping manage the content and behavior of web interactions, with common types including Request Headers (client info) and Response Headers (server info). 
What They Do
Describe the Message: Indicate content types (e.g., Content-Type: text/html), length, and encoding.
Control Caching: Manage how browsers and proxies store responses (e.g., Cache-Control).
Handle Authentication: Carry credentials (e.g., Authorization) or security tokens.
Provide Context: Detail the client (e.g., User-Agent) or the request source (e.g., Referer). 
Types of Headers
Request Headers: Sent by the client, like Accept, Host, Cookie, User-Agent.
Response Headers: Sent by the server, like Content-Type, Server, Set-Cookie, Location.
General Headers: Apply to both requests and responses, such as Date, Connection.
Entity Headers: Describe the message body (payload), like Content-Length, Content-Encoding. 
Examples in Action
When you visit a site, your browser sends a Request Header with User-Agent: Chrome/120.0... and Accept-Language: en-US.
The server responds with a Response Header like Content-Type: text/html; charset=UTF-8 and Cache-Control: max-age=3600. 
Key Characteristics
Key-Value Pairs: Consist of a name, colon, and value (e.g., Host: example.com).
Case-Insensitive (HTTP/1.x): Header names are generally not case-sensitive, though lowercase is common in newer versions.
Invisible to Users: Managed automatically by browsers and servers, though developers can view them in developer tools. 
*/

//_________________________________________________________________________________________________________________
//API request in js using fetch:


// let url = "https://catfact.ninja/fact";
// //let pro = fetch(url);//we can see the api in network tab in inspect

// //console.dir(pro);//it is a promise

// fetch(url).then((response)=>{
//     //console.log(response);
//    //console.log(response.json());//it return readable data of api in the form of promise
//    //response.json().then((data)=>{console.log(data)});//or we can write in another then block
//    return response.json();
// })
// .then((data)=>{
//     //console.log(data);
//     console.log(data.fact);
//     //if we want to send another req
//     return fetch(url);
// })
// .then((response)=>{
//     //console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     //console.log(data);
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log("Error:-", err);//if i give wrong url i can see error
// });

// console.log("Hi iam Saikrishna");  // as api in js are asynchronus it won't wait so this will print first


// _______________________________________________________________________________________________________________________________________________



//Using Fetech with async and await

// let url = "https://catfact.ninja/fact";

// //without await
// // async function getFacts() {
// //     let res = fetch(url);
// //     console.log(res);// it prints undefined as fetch is a asynchronus console fun won't wait until it fetch

// // }
// //getFacts();

// //with await
// async function getFacts() {
//    try{
//     let res =await fetch(url);//returns a promise
//     let data = await res.json();//returns a promise
//     console.log(data.fact);
//     //we can fetch again
//     let res2 =await fetch(url);//returns a promise
//     let data2 = await res2.json();//returns a promise
//     console.log(data2.fact);
//    }
//    catch(err)
//    {
//      console.log(err);
//    }

//    console.log("bye");// it will print even error occurs 
// }
// getFacts();

//_________________________________________________________________________________________________________________________________________
// API fetch using axios:

//AXIOS: 

/*Axios is a popular JavaScript library for making HTTP requests (like GET, POST, DELETE) from browsers or Node.js, used to fetch data from APIs,
 interact with servers, and manage asynchronous data flow with a user-friendly, promise-based API, simplifying modern web development by handling JSON, 
 interceptors, and errors more easily than native methods.  
Key Uses:
API Integration: Fetches data from RESTful APIs and other external services. 
Data Fetching: Simplifies retrieving data in frameworks like React. 
Server Communication: Sends requests to your own server or third-party servers. 
Asynchronous Operations: Handles promises with async/await for cleaner asynchronous code. 
Key Features:
Promise-Based: Uses ES6 Promises for managing asynchronous operations.
Interceptors: Allows you to intercept and modify requests or responses.
Automatic JSON Transformation: Automatically converts JSON data to JavaScript objects.
Error Handling: Provides a structured way to catch HTTP errors.
Cross-Platform: Works in both browsers (via XMLHttpRequest) and Node.js.
Request Cancellation & Timeouts: Offers control over request lifecycle. */



//we can download axios or we can use cdn link that should be added in body of html above app.js script tag

//(<script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>)(cdn link)

//fetch return a promise which non json form so we have parse it to json to use it 
//but axios directly returns a json promise which can be used directly without parsing

// let url = "https://catfact.ninja/fact1";
// async function getFacts() {
//     try{
//         let res = await axios.get(url)//this is to get response from api
//         console.log(res.data);
//     }
//     catch(err)
//     {
//         console.log("Error:-  ",err);
//     }
    
// }
// getFacts();

//_____________to print in web page____________________


// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//     try{
//         let res = await axios.get(url)//this is to get response from api
//         //document.querySelector("#result").innerText =res.data.fact; 
//         return res.data.fact;
//     }
//     catch(err)
//     {
//         //console.log("Error:-  ",err);
//         return "No fact Found!";
//     }
    
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click", async ()=>{
//     let facts = await getFacts();//as it return promise make it await and make call back as async
//     document.querySelector("#result").innerText = facts;
// })

//____________________________________________________________________________________________________


//Sending Header



// let url = "https://icanhazdadjoke.com"// it gives in html text initially
// async function getJoke() {
//     try{
//         let res = await axios.get(url);
//         console.log(res.data);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }
// getJoke(); //it prints in html text


//it gives in json text by sending a header
// let url = "https://icanhazdadjoke.com"
// async function getJoke() {
//     try{
//         const config = {headers: {Accept: "application/json"}};
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }
// getJoke();

//____________________Updating Query Strings_________________________


let url = "http://universities.hipolabs.com/search?country=";
let country = "India";
async function getColleges() {
    
    try{
        let res = await axios.get(url+country);
        console.log(res.data);
    }
    catch(e)
    {
        console.log(e);
    }
}
getColleges();


