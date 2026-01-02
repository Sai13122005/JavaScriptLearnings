//methods are functions for objects
const calculator ={
    a: 8,
    b : 10,
    add: function()
    {
        return this.a+this.b;
    },
    sub: function()
    {
        return this.a-this.b;
    }, 
    div: function()
    {
        return this.a/this.b;
    },
    multi: function()
    {
        return this.a*this.b;
    }
}


console.log(calculator.add());
console.log(calculator.sub());
console.log(calculator.div());
console.log(calculator.multi());