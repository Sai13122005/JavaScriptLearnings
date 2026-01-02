let btn = document.querySelector('button');
function Generate()
{
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`;
}
btn.addEventListener('click', function()
{
    let h3 = document.querySelector('h3');
    h3.innerText = Generate();
    let d = document.querySelector('div');
    d.style.backgroundColor = h3.innerText;
});
