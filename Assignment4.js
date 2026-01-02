/*Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given arr1ay.
Example : if arr1 = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr1 = [1, 3, 4, 5, 6, 3]*/
let arr1 = [1,2,3,4,5,6,2,3];
let num = 2;
console.log(arr1);
for(let i = 0; i< 8; i++)
{
    if(arr1[i]==num)
    {
        arr1.splice(i,1);
    }
}
console.log(arr1);
/*Qs2. Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6*/
let number = 287152;
let count = 0;
let copy = number;
while(copy != 0)
{
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);
/*Qs3. Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25*/
let number1 = 287152;
let sum = 0;
let copy1 = number1;
while(copy1 != 0)
{
    sum += copy1%10;
    copy1 = Math.floor(copy1/10);
}
console.log(sum);
/*Qs4. Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a
given positive integer and denoted by that integer. ]
Example :
7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
5! (factorial of 5) = 1x2x3x4x5 = 120
3! (factorial of 3) = 1x2x3 = 6
0! Is always 1*/
let x = 5;
let fac = 1;
for(let i= 1; i <= x; i++)
{
    fac *= i;
}
console.log(fac);
/*Qs5. Find the largest number in an arr1ay with only positive numbers*/
let max = -1;
for(let i = 0; i < arr1.length; i++)
{
    if(max < arr1[i])
    {
        max  = arr1[i];
    }
}
console.log(max);