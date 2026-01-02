//forEach
let arr = [1,2,3,4,5];
arr.forEach(function(el){
    console.log(el);
});
 //or
arr.forEach((el)=>{
    console.log(el);
});
//or
let print = function(el)
{
    console.log(el);
}
arr.forEach(print);

//for arr of objects 
let s = [{
    name: "sai",
    marks: 98
},{
    name: "krishna",
    marks: 99
},{
    name: "pavan",
    marks: 80
}]
s.forEach(function(student){
    console.log(student.name);
    console.log(student.marks);
})

{
//-------------------------map---------------(it returns a new array after given operation in callback function)
let arr1 = [1,2,3,4,5];
let doubleArray = arr.map((e)=>{
    return e*2; 
});

console.log(doubleArray);

//for arr of objects 
let s = [{
    name: "sai",
    marks: 98
},{
    name: "krishna",
    marks: 99
},{
    name: "pavan",
    marks: 80
}]
 // to extract gpa array from marks
 let gpaArray = s.map((student)=>{
    return student.marks/10;
 })
 console.log(gpaArray);
}

//----------------filter------------------

// it returns an array that the elements gives true for given condition

{
    let arr1 = [1,2,3,4,5,6,7,8,9,10,12];
    let evenArray = arr1.filter((num)=>(num%2==0));
    console.log(evenArray);
}

//-------------Every---------------
//this return true for all elements in given array satisfy given condition else return false
//similar logical AND
{
    let arr = [1,2,3,4,5,6,7,8,9];
    console.log(arr.every((num)=>(num<10)));
}
//----------Some---------------
// //same like every but it uses OR logic
{
    let arr = [1,2,3,4,5,6,7,8,9,10,54];//only 54 is greater than ten
    console.log(arr.some((num)=>(num>10)));
}

//----------reduce---------------
//syntax: arr.reduce(reducer function with two variables for (accumalator, element));
{
    let arr = [1,2,3,4,5,6];
    let multi = arr.reduce((res,e1)=>{//reducing to product of elements
        return res*e1;
    });
    console.log(multi);
    
    let add = arr.reduce((res,e1)=>{//reducing to sum of elements
        return res+e1;
    });
    console.log(add);
    //finding max element of arr using reduce
    let arr1 = [8,8,2,54,23,87,985,2];
    let maximum = arr1.reduce((max,e1)=>{
        if(max < e1)
        {
            return e1;
        }
        return max;
    })
    console.log(maximum);
}

//Practice Question 
//check all the elements in arr are multiple of 10
{
    let arr = [10,20,35,40,50];
    let ans = arr.every((num)=>(num%10==0));
    if(ans)
    {
        console.log("All elements are multiple of 10");
    }
    else
    {
        console.log("All elements are not multiple of 10");
    }
}

//Practice Question 
//find min num in arr
{
    let arr = [5,9,3,4,1,0,-10];
    let min = arr.reduce((min,e1)=>{
        if(min >e1)
        {
            return e1;
        }
        return min;
    });
    console.log(min);

}

