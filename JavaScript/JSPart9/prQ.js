let btn = document.createElement('button');
let input = document.createElement('input');

btn.innerText = "Click Me";

document.querySelector("body").append(input);
document.querySelector("body").append(btn);


//ans2
btn.setAttribute('id','btn');
input.setAttribute("placeholder", "username");



//ans3
let btn1 = document.querySelector('#btn');
btn1.classList.add('btnStyle');



//ans4
let h1 = document.createElement('h1');
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);




//ans 5
let p = document.createElement("p");
p.innerHTML = "Apna College <b> Delta </b> Practice";
document.querySelector("body").append(p);


