for(let i=1; i<=5; i++){
    console.log(i);
}

//odd numbers
for(let i=1; i<=15; i=i+2){
    console.log(i);
}

console.log("reverse");
for(let i =15; i>=1; i=i-2){
    console.log(i);
}

//even numbers
for(let i=2; i<=15; i=i+2){
    console.log(i);
}

console.log("reverse");
for(let i =50; i>=2; i=i-2){
    console.log(i);
}

//multiplication table

for(let i = 4; i<=40; i= i+4){
    console.log(i);
}

let n = prompt("enter which multiplication table you want");
n = parseInt(n);

for(let i = n; i<=n*10; i= i+n){
    console.log(i);
}


//nested loop

for(let i =1; i<=3; i++){
    console.log("outer");
    for(let j = 1; j<=3; j++){
        console.log(j);
    }
}


//while loop

let i = 1;
while (i<=5) {
    if(i==3){
     break;
    }
    console.log(i);
    i++;
    
}

//fvmovie
const favmov = "chhava";
let guess = prompt("guess the movie");

while ((guess != favmov)) {
    if(guess == 'quit'){
        console.log(" you are quit");
    }
    guess = prompt("wrong guess please try again");
}

if (guess == favmov) {
    console.log("congrats");
} 


//loops with array
let fruits = ['apple', 'banana','mango','pineapple'];
for(let i = 0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}

//even or od index print
for(let i = 1; i<fruits.length; i= i+2){
    console.log(i, fruits[i]);
}

//reverse
for(let i = fruits.length; i>0; i--){
    console.log(i, fruits[i]);
}

//loop with nested array

let stud = [['kartik',82],['krishna',83],['sandy',78]];

for(let i=0; i<stud.length; i++){
    console.log(`student info ${i}`);
    for(let j = 0; j<stud[i].length; j++){
        console.log(stud[i][j]);
    }
}

//for of loops
for(fruit of fruits){
    console.log(fruit);
}
for(char of "apnacollege"){
    console.log(char);
}

//nested for of loops
for(list of stud){
    for(name of list){
        console.log(name);
    }
}