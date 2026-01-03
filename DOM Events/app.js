// let btn = document.querySelector('button');
//  btn.onclick = function()
//  {
//          console.log('button was clicked');
//  }

// btn.onclick = function()
// {
//     alert("button was clicked");
// }
//  let btns = document.querySelectorAll('button');

// function sayHello()
// {
//     alert("hello");
// }
// btn.onclick = sayHello;
// for(let bn of btns )
// {
//     bn.onmouseenter = function()
//     {
//         console.log("Mouse entered");
//     }
//  }
// function sayName()
// {
//     alert('saikrishna');
// }
// // ---------------------------------------------------------
// for(let bn of btns )
// {
//    bn.onclick = sayHello;
//    bn.onclick = sayName;
// }
// //here only we can get sayName on button click we can't execute multiple things so for that we use event listeners
// //============================================================

// for(let bn of btns )
// {
//    bn.addEventListener("click", sayHello);
//    bn.addEventListener("click", sayName);
// }
// // ===============================================


// let p = document.querySelector('p');
// p.addEventListener('mouseenter', function()
// {
//     console.log("on para");
// })
// let box = document.querySelector('.box');
// box.addEventListener('mouseenter',function(){
//     console.log('Inside the box');
// })


// ----------------------this--------------------
// let button = document.querySelector('button');
// button.addEventListener('click', function()
// {
//     console.dir(this);
//     this.style.backgroundColor = 'red';
// });
// let para = document.querySelector('p');
// let h2 = document.querySelector('h2');
// let h1 = document.querySelector('h1');
// para.addEventListener('click', function()
// {
//     console.dir(this);
//     this.style.backgroundColor = 'red';
// });
// h2.addEventListener('click', function()
// {
//     console.dir(this);
//     this.style.backgroundColor = 'red';
// });
// h1.addEventListener('click', function()
// {
//     console.dir(this);
//     this.style.backgroundColor = 'red';
// });
// to reduce repetition of code
// function changeColor()
// {
//     console.dir(this);
//     this.style.backgroundColor = 'red';
// }
// para.addEventListener('click', changeColor);
// h2.addEventListener('click', changeColor);
// h1.addEventListener('click', changeColor);



// ------------------------------------------------------------------------------------------------------
let inp = document.querySelector('input');
// inp.addEventListener('keydown', function(event)
// {
    
//     console.log(event.key);
//     console.log(event.code);
//     console.log("Key pressed");
// })
inp.addEventListener("keydown", function(event)
{
    if(event.code == "ArrowUp")
    {
        console.log("Character moves forward");
    }
    else if(event.code == "ArrowDown")
    {
        console.log("Character moves Backward");
    }
    else if(event.code == "ArrowRight")
    {
        console.log("Character moves right");
    }
    else if(event.code == "ArrowLeft")
    {
        console.log("Character moves left");
    }
    else if(event.code== "Space")
    {
        console.log("Character Jumps");
    }
    else 
    {
        console.log("Invalid Move");
    }
})

// inp.addEventListener('keyup', function()
// {
//     console.log("Key released");
// })