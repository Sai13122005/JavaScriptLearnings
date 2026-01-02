//Qs1. Square and sum the array elements using the arrow function and then find the
//average of the array.
let arr = [2,5,8,3,5,2];
let Square = arr.map((num)=>(num**2));
console.log(Square);
let sum = Square.reduce((res,num)=>(res+num));
console.log(sum);
let avg = sum/Square.length;
console.log(avg);

//------------------------------------
/*Qs2. Create a new array using the map function whose each element is equal to the
original element plus 5.*/
{
    let arr = [2,5,8,3,5,2];
    console.log(arr);
    let newArray = arr.map((num)=>(num+5));
    console.log(newArray);
}
//-----------------------------------------------------
/*Qs3. Create a new array whose elements are in uppercase of words present in the
original array.*/
{
    let Str = ['rahul', 'ramesh', 'banty'];
    let newArray = Str.map((c)=>(c.toUpperCase()));
    console.log(newArray);
}
//---------------------------------------------------------------------------------

/*Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled.*/
{
    let arr = [2,5,8,3,5,2];
    const doubleAndReturnArgs = (arr, ...args)=>[
    ...arr, ...args.map((n)=>(n*2))
    ]
    console.log(doubleAndReturnArgs(arr, 3,6,8,4,2,1));
}
/*Qs5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object*/
{
    const obj1 = {
        name1 : "Saikrishna",
        Sem1: 2.1
    }
    const obj2 = {
        name2: "Varun",
        Sem2: 2.1
    }
    const NewObj = (obj1, obj2)=>({...obj1,...obj2});
    console.log(NewObj(obj1,obj2));
}

//---------------------------------------------------------------------
