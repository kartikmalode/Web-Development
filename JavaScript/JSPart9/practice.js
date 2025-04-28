let para = document.createElement('p');
para.innerText = "hello how are you";
document.querySelector('body').append(para);

para.classList.add('red');

let h3 = document.createElement('h3');
h3.innerText = "hello how are you";
document.querySelector('body').append(h3);

h3.classList.add('blue');

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "I am in div";
para2.innerText = "Me too";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector('body').append(div);


