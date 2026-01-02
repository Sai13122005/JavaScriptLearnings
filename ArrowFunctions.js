// name less function 
const sum = (a,b)=>{
    return a+b;
}
console.log(sum(6,9));
const pow = (a,b)=>{
    return a**b;
}
console.log(pow(6,3));
//note: if there is only argument need not to put parenthesis
const cube = n => {
    return n*n*n;
}
console.log(cube(3));
// arrow function with zero arguments, parenthesis are mandatory
const hello = ()=> {
    console.log("Hello");
}
console.log(hello());

// arrow function with implicit return, instead of curly braces use parenthesis 
//in body it should contain only value that wants to return (it is short syntax function with return value)
const mul = (a,b) => (a*b);
console.log(mul(5,8));
// we can also remove parenthesis
const sum1 = (a,b) => a+b;
console.log(sum1(4,7));

//diference between working of "this" for normal function and arrow function
const Student = {
    name: 'Saikrishna',
    marks: 9.8,
    getName1: function()
    {
        console.log(this);//Student scope
        return this.name; 
    },
    getName2 : ()=>{
        console.log(this); //Student's parent Scope(means here window)
        return this.name;
    },
    getInfo1 :function()
    {
        setTimeout(function(){
            console.log(this) // windows (setTimeout is in windows Object)
        },2000)
    },
    getInfo2: function(){
        setTimeout(()=>{
            console.log(this)// Student scope (as outer function(which student scope) is parent of inner function )
        },4000)
    }

}
// Student.getName1();//you will get output("Saikrishna")
// Student.getName2();// you will not get output
// Student.getInfo1();
// Student.getInfo2();

//Question : arrow function that returns n^2
const sqr = (n)=>(n**2);
console.log(sqr(11));
// Question : function that prints "Hello" 5 times at interval of 2s each
let print = setInterval(() => {
        console.log("Hello");
    }, 2000);
setTimeout(()=>{
     clearInterval(print);
     console.log("cleared");
},10000);