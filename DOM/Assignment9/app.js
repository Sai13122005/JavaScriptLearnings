/*Qs1. Create a new input and button element on the page using JavaScript only. Set the
text of button to “Click me”;*/
let btn = document.createElement('button');
let input = document.createElement('input');
btn.innerText = "Click Me!";
let body = document.querySelector('body');
body.appendChild(input);
body.appendChild(btn);
/*Qs2. Add following attributes to the element :
- Change placeholder value of input to “username”
- Change the id of button to “btn"*/

input.setAttribute("placeholder", "username");
btn.setAttribute('id', 'btn');

/*Qs3. Access the btn using the querySelector and button id. Change the button
background color to blue and text color to white.*/

let button= document.querySelector('#btn');
/*Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined.
Change its color to purple.*/
let h1 = document.createElement('h1');
h1.innerText = 'DOM Practice';
h1.classList.add('Dom');
body.insertAdjacentElement('afterbegin', h1);
/*Qs5. Create a p tag on the page and set its text to “Apna College Delta Practice”,
where Delta is bold.*/
let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practice";

body.appendChild(p);
