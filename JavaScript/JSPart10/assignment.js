let frm = document.querySelector('form');

frm.addEventListener('mouseout',function(){
   console.log("mouse OUT");
});

let txt = document.querySelector('#txtarea');

txt.addEventListener('Scroll', function(){
    console.log("scollerd");
});


let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    btn.style.backgroundColor = 'green';
});


let inpt = document.querySelector('#name');
let h1 = document.querySelector('h1');


inpt.addEventListener('input', function(){
    let filtered = inpt.value.replace(/[^a-zA-Z\s]/g, '');

    inpt.value = filtered;
    h1.innerText = filtered;
});


