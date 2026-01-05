// let div = document.querySelector("div");
// let ul  = document.querySelector("ul");
// let lis = document.querySelectorAll("li");
// div.addEventListener("click", function(){
//     console.log("div is clicked");
// });
// ul.addEventListener("click", function(){
//     console.log("ul is clicked");
// });
// for(let i = 0; i < lis.length; i++)
// {
//     lis[i].addEventListener("click", function(){
//         console.log("li is clicked");
//     });
// }

// to overcome event bubbling we have to use event.stopPropagation()

let div = document.querySelector("div");
let ul  = document.querySelector("ul");
let lis = document.querySelectorAll("li");
div.addEventListener("click", function(){
    console.log("div is clicked");
});
ul.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("ul is clicked");
});
for(let i = 0; i < lis.length; i++)
{
    lis[i].addEventListener("click", function(event){
        event.stopPropagation();
        console.log("li is clicked");
    });
}