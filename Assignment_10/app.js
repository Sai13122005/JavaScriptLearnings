let box = document.querySelector(".box");
box.addEventListener("mouseout", function()
{
    console.log("mouse crossed the box");
    box.style.backgroundColor = "red";
});

let inp = document.querySelector("input");
inp.addEventListener("keypress", function(event)
{
    if(event.code == "Space")
    {
        console.log("key pressing");
    }
});
// ----------------------------------------------------------------
/*Qs2. Create a button on the page using JavaScript. Add an event listener to the button
that changes the button’s color to green when it is clicked.*/


let body = document.querySelector("body");
let btn = document.createElement("button");
btn.innerText = "Click me!";
body.appendChild(btn);
btn.addEventListener("click", function()
{
    btn.style.backgroundColor = "green";
});

// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]

let h2 = document.querySelector("h2");
let inpu = document.querySelector("#inp");
inpu.addEventListener("input", function(event)
{
    let original = event.target.value;
    let filters = original.replace(/[^a-zA-Z\s]/g, '');
    h2.innerText = filters;
});