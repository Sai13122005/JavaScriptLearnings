// //selecting elements in document using getElementById
// let ObjImg = document.getElementById("mainImg");
// //selecting elements in document using getElementByClass
// let old = document.getElementsByClassName("oldImg");
// for(let i = 0; i< old.length; i++)
// {
//     //old[i].src = "assets/spiderman_img.png";(to change permenant in web page)
//     console.dir(old[i]);
// }
// //selecting elements in document using getElementByTagName
// let para = document.getElementsByTagName("p");
// console.dir(para);
// //para[0].innerText = "this is paragraph";
// //if it will not find the given tag then it returns empty collection
// //Query selector(ver important)
// //allow us to use any selector
// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector('.oldImg'));
// //note : it selects only first found element in html doc not collection of all elements in html doc
// ///to access nested tag using querySelector we should write selectors with space same as html and css
// console.dir(document.querySelector("div a"))//first anchor tag of first div in doc
// //to get collection we have to use querySelectorAll()
// console.dir(document.querySelectorAll("div a"));
// console.dir(document.querySelectorAll("img"));


// //Properties and Methods
// //InnerText: Shows the visible contained in a node
// //textContent: Shows all full text (even hidden)
// //innerHTML: Shows the full markup language
// console.dir(document.querySelector('p').innerText);
// console.dir(document.querySelector('p').textContent);
// console.dir(document.querySelector('p').innerHTML);
// //modification of document
// let a = document.querySelector("p");
// a.innerText = 'hi Iam <b>Saikrishna</b>';//it does not recognise tags
// a.innerHTML = 'hi Iam <b>Saikrishna</b>';// it recognises tags then here it made bold
// let heading = document.querySelector('h1');;
// //heading.innerHTML = "<u>Spider Man</u>";
// //or
// heading.innerHTML = `<u>${heading.innerText}</u>`;//here we no need to remember actual inner text while writing

// //Atrribute Manipulation
// let img = document.querySelector("img");
// console.dir(img);
// console.dir(img.getAttribute('src'));
// img.setAttribute('src', 'assets/creation_2.jpeg');
// console.dir(img.getAttribute('src'));
// //we can also add new attribute to a tag
// console.dir(img.getAttribute('class'));
// img.setAttribute('class', "image");
// console.dir(img.getAttribute('class'));

// //manipulation of style
// // use style keyword
// // console.dir(heading.style);
// // heading.style.color = 'red';
// // heading.style.backgroundColor = 'black';

// let links = document.querySelectorAll(".box a");
// // for(let i = 0; i < links.length; i++)
// // {
// //     links[i].style.color = 'yellow';
// // }
// //or
// for(link of links)
// {
//     link.style.color = 'yellow';
// }
// // we can access inline styling in html using style property


// // let box = document.querySelector(".box");
// // console.dir(box.style);


// //we cannot access style in css file using this style property
// //to access style in css file

// //we have to classList property
// //eg
let heading = document.querySelector('h1');
console.dir(heading.classList);
//if class "abc" added to heading
//heading.classList.add("abc");
//we can remove the style removing class from the list
//heading.classList.remove("abc");
// heading.classList.add("oldImg");
let img = document.querySelector("img");
console.dir(img.classList);
//img.classList.add("oldImg");
//img.classList.remove('oldImg');

//we can also setAttribute instead of classList but we can add only one class at a time 
//but using class we can add multiple classes at a time
//heading.setAttribute("class",'abc');
//heading.classList.add('abc', 'pqr', 'xyz');
//contains method in classList object to check whether a given class is present or not
//console.dir(heading.classList.contains("abc"));
//console.dir(heading.classList.contains("mno"));

//toggle method in classList object which toggles between add and remove means if there exist given class then toggle removes it and inverse
// heading.classList.toggle("abc");
// console.dir(heading.classList);
//and it returns true if added and false for removed
//eg for classList
// let box = document.querySelector('.box');
// box.classList.add('PurpleBg');


//_____Navigation_________________
//it helps to navigate elements of html page
//eg
    let h4 = document.querySelector('h4');
    //console.dir(h4.parentElement);
    console.dir(h4.nextElementSibling);
    let box = document.querySelector('.box');
    //console.dir(box.children);

//------------Adding elements to document--------------------
let button = document.createElement('button');
button.innerText = "Button";
button.style.backgroundColor = "yellow";
//after creating we have to append it to doc
let body = document.querySelector('body');
body.appendChild(button);
let para = document.createElement('p');
para.innerText = "This is a para";
box.children[1].children[2].appendChild(para);
//box.children[1].children[0].append(para);
//box.append(para);
para.append(" this is new text");
box.prepend(button);
//_______insertAdjacentElement_____________
/*A string representing the position relative to the targetElement; must match (case-insensitively) one of the following strings:

'beforebegin': Before the targetElement itself.
'afterbegin': Just inside the targetElement, before its first child.
'beforeend': Just inside the targetElement, after its last child.
'afterend': After the targetElement itself.
element*/
let btn = document.createElement('button');
btn.innerText = "New Button";
let p = document.querySelector('p');
// p.insertAdjacentElement('beforebegin',btn);
// p.insertAdjacentElement('afterbegin', btn);
// p.insertAdjacentElement('beforeend', btn);
p.insertAdjacentElement('afterend', btn);
//_____________remove elements_______________________
//1, removeChild(element)
//2.remove()
//body.removeChild(btn);
//or
btn.remove();
button.remove();