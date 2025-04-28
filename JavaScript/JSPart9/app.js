console.log(document.getElementById("mainImg"));
let smallest = document.getElementsByClassName("oldImg");

for(let i=0; i<smallest.length; i++){
    console.dir(smallest[i].src);
}


console.log(document.getElementsByTagName("p"));  //select p element

//queryselector
console.dir(document.querySelector("h1"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("p"));
console.dir(document.querySelectorAll("div a"));

//setting properties and methods
let para = document.querySelector("p");
console.log(para.innerHTML);
console.log(para.innerText);

console.log(para.textContent);

para.innerText = "hi i am spiderman";
console.log(para.innerText);


//manipulating attributes
let img = document.querySelector('img');

img.getAttribute('id');
img.setAttribute('id','spiderimg');

//manipulating style
let heading = document.querySelector('h1');
heading.style;
heading.style.color = 'red';
heading.style.backgroundColor = 'green';

//manipulating classlist properties
console.log(heading.classList);
console.log(heading.classList.add("green"));
console.log(heading.classList.remove("underline"));
console.log(heading.classList.contains("underline"));
console.log(heading.classList.toggle("underline"));
console.log(heading.classList);

//navigation 
let head = document.querySelector("h4");
let div = document.querySelector(".box");

console.log(head.parentElement);
console.log(div.children);
console.log(div.previousElementSibling);

//adding elements
let btn = document.createElement("button");
let newp = document.createElement("p");

div.appendChild(btn);
div.prepend(newp);
newp.append("hello");

head.append(btn);

btn.innerHTML = "New Button";
newp.insertAdjacentElement('beforebegin' ,btn);
newp.insertAdjacentElement('afterbegin' ,btn);
newp.insertAdjacentElement('beforeend' ,btn);

newp.insertAdjacentElement('afterend' ,btn);


let btttn = document.querySelector("button");
let body = document.querySelector('.box');
body.removeChild(btn);
newp.remove();






