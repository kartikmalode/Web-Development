function poem(){
    console.log("twinkle twinkle little star");
    console.log("how I wonder what you are ");
}

poem();

function isAdult(){
    let age = 18;
    if (age >= 18) {
        console.log("adult");
    } else {
        console.log(" not adult"); 
    }
}

isAdult();


function Rolldice(){
    let randm = Math.floor(Math.random()*6)+1;
    console.log(randm);
}
Rolldice();
Rolldice();
Rolldice();
Rolldice();



//function arguments

function info(name ,age){
     console.log(`${name} age is ${age}`);
}

info("pranay", 40);
info("baba");

function sum(a,b){
    console.log(a+b);
}
sum(5,3);
sum(8,6);


function avgnum(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}

avgnum(2,4,6);

function multiplicationtable(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}
multiplicationtable(5);


// return keyword

function sum(a,b){
    return a+b;
}
console.log(sum(5,3));
console.log(sum(sum(2,3),3));


function isAdult(age){
    if (age>=18) {
        return "adult";
    } else {
        return "not adult";
    }
}

console.log(isAdult(23));

function getsum(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum +=i;
    }
    return sum;
}
console.log(getsum(10));

let str = ["hi", "hello","bye","!"];

function printstr(str){
    let result = "";

    for(let i = 0; i<str.length; i++){
        result += str[i];
    }
    return result;
}
console.log(printstr(str));


//scopes
let sm = 54;  //global scope
function sum(a,b){
   let sm = a+b;  //function scope
   console.log(sm);
}

sum(2,5);
console.log(sm);

//block scope

{
    let a = 50;
    console.log(a); // access withnin only block  but var keyword not supported the block
}
//console.log(a); // cannot print


//lexical scope
function outerfunc(){
    let x = 5;
    let y = 4;

    function innerfunc(){
        console.log(x);
    }
    innerfunc();
}
outerfunc();


//funstion expression

let hello = function(){
    console.log("hello");
}
console.log(hello());

//higher order function


function multiplegreet(func, count){
    for(let i=1; i<=count; i++){
        func();
    }

}

let greet = function(){
    console.log("hello");
}

multiplegreet(greet,5);

// higher order function return
function oddeventest(request){
    if (request=="odd") {
       return function(n){
            console.log(!(n%2==0));
        }
    } else  if(request=="even"){
       return function(n){
            console.log((n%2==0));
        }
        
    }else{
        console.log("wrong request");
    }
}
let request ="odd";
let func = oddeventest(request);
console.log(func(50));



//methods

const calculator = {
        add: function(a,b){
            return a+b;      
          },
          sub: function(a,b){
            return a-b;      
          },
          mul: function(a,b){
            return a*b;      
          }
};
console.log(calculator.add(5,5));
console.log(calculator.mul(5,5));

//methods shorthand
const calcul = {
    add(a,b){
        return a+b;      
      },
      sub(a,b){
        return a-b;      
      },
      mul(a,b){
        return a*b;      
      }
};
console.log(calculator.add(5,5));
console.log(calculator.mul(5,5));