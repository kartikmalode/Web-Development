let btn = document.querySelector('button');
let inp = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener('click',function(){
    let item = document.createElement('li');
    item.innerText = inp.value;

    let del = document.createElement('button');
    del.innerText = 'delete';
    del.classList.add('delete');


    item.appendChild(del);
    ul.appendChild(item);
    inp.value = "";


});

//event delegation
ul.addEventListener('click',function(event){
    if (event.target.nodeName =="BUTTON") {
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
})

// let delbtns = document.querySelectorAll(".delete");
// for(del of delbtns){
//     del.addEventListener('click',function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }