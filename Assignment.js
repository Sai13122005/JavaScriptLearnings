/*Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [7, 9, 0]*/
let arr = [7, 9, 0, -2];
let n = 3;
console.log(arr.slice(0, n));
/*Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [9, 0, -2]*/
console.log(arr.slice(-1*n));

/*Qs3. Write a JavaScript program to check whether a string is blank or not.*/
let str = prompt("Enter a String:");
if(str.length== 0)
{
    console.log("Blank");
}
else{
    console.log("Not Blank");
}
/*Qs4. Write a JavaScript program to test whether the character at the given (character)
index is lower case.*/
let str1 = "DSsvjnsdiDSFBKJ";
let i = parseInt(prompt("Enter index"));
if(str1[i].toLowerCase() == str1[i])
{
    console.log("Yes");
}
else{
    console.log("No");
}
/*Write a JavaScript program to strip leading and trailing spaces from a string.*/
let s = "  sdkf   asdkhi     ";
console.log(`Original String:${s}`);
console.log(`Original String:${s.trim()}`); 
/*Write a JavaScript program to check if an element exists in an array or not*/
let ele = parseInt(prompt("Enter Element"))
if(arr.indexOf(ele) != -1)
{
    console.log("Exist");
}
else{
    console.log("Not Exist");
}