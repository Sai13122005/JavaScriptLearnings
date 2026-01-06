let user = [];
let game = [];
let btns = ['red', 'green', 'blue', 'yellow'];
let start = false;
let level = 0;
let h2 = document.querySelector('h2');
document.addEventListener("keypress", function()
{
    if(start == false)
    {
        start = true;  
        levelUp();    
    }
});
function levelUp()
{
    user = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    gameFlashBtn(document.querySelector(`.${btns[randIdx]}`));
    game.push(btns[randIdx]);
}
function gameFlashBtn(btn)
{
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    }, 200);
}
function userFlashBtn(btn)
{
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 200);
}

function btnPress()
{
    userFlashBtn(this);
    user.push(this.getAttribute("id"));
    check(user.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click", btnPress);
}


function check(idx)
{
    if(game[idx] === user[idx])
    {
        if(game.length == user.length)
        {
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML = `Gamse Over! <b>Your Score ${level}</b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor = "white";
        }, 180);
        reset();
    }
}

function reset()
{
    start = false;
    game = [];
    user = [];
    level = 0;
}