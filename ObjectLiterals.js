const post = {
    username :"Saikrishna13",
    content: "This is a post",
    likes: 100,
    reposts: 100,
    tags: ["@uoh","@apnacollege"]
}

// to access properties in objects
// post["key"] or post.key
//key always converted into string
const obj =
{
    1: 'a',
    2: 'b',
    true: 'c',
    null : 'd',
    undefined: 'e'
}
// add property
obj.new = 'i';
//update
obj.null = 'z';
// delete
delete obj.new;
//nested objects
const nest = {
    a:{1:'z'},
    b:{2:'u'},
}
//array of object 
const arr = [{
    a:{1:'z'},
    b:{2:'u'},
},{
    1: 'a',
    2: 'b',
    true: 'c',
    null : 'd',
    undefined: 'e'
}
]
//inbulit objects eg:Math

//generate random number between 1 to 100
console.log(Math.floor(Math.random()*100)+1);
//random b/w 20 to 25
console.log(Math.floor(Math.random()*5)+20);
//Qs1. Create a program that generates a random number representing a dice roll.
//[The number should be between 1 and 6].
console.log(Math.floor(Math.random()*6)+1);
/*Qs2. Create an object representing a car that stores the following properties for the
car: name, model, color.
Print the car’s name.*/
const car = {
    name: "suzuki",
    model: "2025",
    color: "black"
}
console.log(car.name);
/*Qs3. Create an object Person with their name, age and city.
Edit their city’s original value to change it to “New York”.
Add a new property country and set it to the United States.*/
const Person = {
    name: "sai",
    age: 20,
    city: "Hyd"
}
Person.city = "New York";
Person.country = "United State";
console.log(Person);