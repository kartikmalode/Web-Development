let gameseq = [];
let userseq = [];

let btns = ["yellow","red","green", "purple"];

let level = 0;
let started = false;

let h2 = document.querySelector('h2');

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUP();
    }
});

function gameflash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUP(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randonidx = Math.floor(Math.random()*3);
    let rancolors = btns[randonidx];
    let randbtn = document.querySelector(`.${rancolors}`);
   
    gameseq.push(rancolors);
    console.log(gameseq);

    gameflash(randbtn);
}
function checkAns(idx){
  if (userseq[idx] == gameseq[idx]) {
    if (userseq.length == gameseq.length) {
        setTimeout(levelUP,1000);
    }
  }else{
    h2.innerHTML = `Game over!  your score was <b>${level} </b> <br> press any key to start `;
    reset();
    document.querySelector('body').style.backgroundColor = 'red';
    setTimeout(function(){
        document.querySelector('body').style.backgroundColor = 'white';

    },150);
  }
}

function btnpress(){
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute('id');
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll('.btn');
for(btn of allbtns){
btn.addEventListener('click',btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}