const stud={
    name: "kartik",
    eng :75,
    math :80,
    bio :50,

      getavg(){
        let avg = (this.eng+this.math +this.bio)/3;
        console.log(`${this.name} avg marks is = ${avg}`);
    }

};

console.log(stud.getavg());


// try catch

try {
    console.log(a);
} catch (e) {
   console.log("variable doesnt exists");
   console.log(e); 
}


//arrow function 
const sum = (a,b) =>{
    console.log(a+b);
}
console.log(sum(2,5));

//implicit return in arrow function
const mul = (a,b) => a*b; //for returnning single value no need to brackets

console.log(mul(5,5));


//set time out function

console.log("hi there!");
 setTimeout(()=>{
    console.log("apna college");
 },4000)  //4sec
console.log("welcome to");


//setintervals function
 let id = setInterval(()=>{
    console.log("hello how are you");
 },2000) // non stoping execution

 clearInterval(id);  //for stoping execution


 //this with arrow function

 const student={
    name: "kartik",
    marks :75,
    prop : this, // global scope
    
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMark: ()=>{
        console.log(this); // parent scope -window
        return this.marks;
    }

 };
 console.log(student.getName());
 console.log(student.getMark());

 // practice Q

 const square = (n) => n*n;
 console.log(square(4));

 let id1 = setInterval(()=>{
    console.log("Hello world");
 },2000);

setTimeout(() =>{
    clearInterval(id1);
    console.log("clear interval run");
},10000);
