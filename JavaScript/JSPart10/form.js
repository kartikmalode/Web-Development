let form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    alert("form submitted");


   let user = this.elements[0];                            //document.querySelector('#user');
   let pass = this.elements[1];                               //document.querySelector('#pass');

   console.log(user.value);
   console.log(pass.value);

   alert(`Hi ${user.value} ,your password is set to ${pass.value}`);


    user.addEventListener('change', function(){
        console.log("change evnt");
        console.log("final value", this.value);
    })
   let Inp = document.querySelector('#text');
   let p = document.querySelector('p');

   Inp.addEventListener('input',function(){
      console.log(Inp.value);
      p.innerText = Inp.value;
   });


})