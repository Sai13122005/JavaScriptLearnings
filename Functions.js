function hello()
{
    console.log("Hello");
}
hello();

function rollDice()
{
    let Random = Math.floor(Math.random()*6)+1;
    console.log(Random);
}
rollDice();
rollDice();
rollDice();
//function expressions(Lamba function without name)
let sum = function(a,b){
    return a+b;
}
console.log(sum(2,6));

//higher order functions (functions in functions)
function hello1()
{
    function name(){
        console.log("hello")
    }
    name();
}
hello1();
// return fuctions
function OddEvenFactory(request)
{
    if(request == "odd")
    {
        return function(n){
            if(n%2!=0)
            {
                console.log("true");
            }
            else{
                console.log("false");
            }
        }
    }
    else if(request == "even")
    {
        return function(n)
        {
            if(n%2==0)
            {
                console.log("true");
            }
            else{
                console.log("false");
            }
        }
    }
    else{
        console.log("wrong request");
    }
    
}
//let request = prompt("enter request");
//let n = prompt("enter number");
//let func = OddEvenFactory(request);

//func(n); 

//----------default parameters-------------------
//default parameters should be after non default parameters
//wrong: f(a=8,b)
function f(a,b=8)
{
    return a+b;
}

console.log(f(20));
//----------------------------------------

//--------Spread(...)(three dots)-------------------
let min = Math.min(1,5,2,8,-1);
console.log(min);
//but for min of arr
let arr = [4,3,7,-1,-9]; 
let min1 = Math.min(...arr);//it gives all parameter from arr separately
console.log(min1);
//printing arr
console.log(arr);
//printing arr elements individually
console.log(...arr);
console.log("Saikrishna");
console.log(..."Saikrishna");
//Spread with array literals
let arr2 = [5,8,3,4,2,7];
let newArray = [...arr2];
console.log(newArray);
let chars = [...'Saikrishna'];
console.log(chars);

let even = [2,4,6,8];
let odd = [1,3,5,7,9];
let num = [...even,...odd];
console.log(num);
num.sort();
console.log(num);

//---------Spread with object literals-------------
let data = {
    email: "Saikrishna@gmail.com",
    password: "123",
};
console.log(data);
let dataCopy= {...data, id:543};
console.log(dataCopy);
let arr3 = [3,6,2,8,6];
let obj ={...arr3};//in the place key indeces of array are there
console.log(obj);
//---------------Rest-------------------
//opposite of rest (syntax same)
function sum1(...args){
    let a = args;
    a.push(7);
    console.log(a);
}
sum1(4,7,2,5,32);
//rest ccombine all individual values into arr
// inbuilt there is a collection not arr "Arguments" acts like rest
function numbers()
{
    console.log(arguments);
    //arguments.push(7);(gives error as  it is not a array);
}
numbers(5,7,4,2,8,8);
//sum of elements in arr
function ad(...args){
    return args.reduce((sum,el)=>(sum+el));
}
console.log(ad(4,5,2,8,4));
//we can add parameter before rest args
function min2(msg,...args)
{
    console.log(msg);
    return args.reduce((min,el)=>{
        if(min > el)
        {
            return el;
        }
        return min;
    })
}
let m =min2("hello", 8,7,4,65,3,2);
console.log(m);

//------------Destructuring with array Literals---------------
//stores values of arr into multiple variables

let names = ['ravi', 'ramesh', 'mahesh','varun'];
//  let winner = names[0];
//  let runner = names[1];
let [winner,runner,...others] = names;
console.log(winner,runner);
console.log(others);

//---------Destructuring with Object literals----------
let Student = {
    name: "Saikrishna",
    sem: 2.1,
    branch: "cse",
}
// let Name = Student.name;
// let Sem = Student.sem;
// let {name, sem} = Student;
// console.log(name);
// console.log(sem);
//console.log(branch); it gives error as it is not in destructure
//or
let {name: Name, sem:Sem} = Student;//we storing in new variables
console.log(Name);
console.log(Sem);
//console.log(name);//it gives error as it is key of Student obj;
//we can also create new varibles while destructure
{
    let {name: Name, sem:Sem, city= "hyd"} = Student;
    console.log(Name);
    console.log(Sem);
    console.log(city);
}



