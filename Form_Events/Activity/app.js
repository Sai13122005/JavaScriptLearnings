let inp = document.querySelector("input");
let para = document.querySelector('p');
//input is used to track small changes in elements like input, select, textarea
inp.addEventListener("input", function()
{
    para.innerText = inp.value;
});