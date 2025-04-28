let btn = document.querySelector('button');

btn.onclick = function(){
    alert('hello');
}

let btns = document.querySelectorAll('button');

for(bt of btns){
    // bt.onclick = sayhello;

    // bt.onmouseenter = function(){
    //     console.log('this is btns');
    // };


    //addeventlistener

    bt.addEventListener('dblclick',sayname);

    bt.addEventListener('click', function(){
        console.log("Hello");
    });
}

function sayhello(){
    alert("welcome");
}

function sayname(){
    alert("welcome to my world");
}




//this 
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let p = document.querySelector('p');
let bton = document.querySelector('button');

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = 'blue';
}

h1.addEventListener('click', changeColor);
h3.addEventListener('click', changeColor);
p.addEventListener('click', changeColor);
bton.addEventListener('click', changeColor);


//keyboardEvent
let inp = document.querySelector('input');

inp.addEventListener('keypress',function(event){
    console.log(event.key);
    console.log(event.code);

    console.log("kay was pressed");
});
inp.addEventListener('keydown',function(event){
    console.log(event.key);
    console.log(event.code);

    console.log("kay was down");
});
inp.addEventListener('keyup',function(event){
    console.log(event.key);
    console.log(event.code);

    console.log("kay was up");
});