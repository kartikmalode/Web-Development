let arr = ["JAY","Malode",1,2];
console.log(arr);

console.log(arr.length);
console.log(arr[0][0]);

let fruits = ["banana","mango" ,"apple"];
fruits[0] = "pineapple";
console.log(fruits);

fruits.push("stoberry");// add the element of last
fruits.unshift("orange"); //add the element of start
console.log(fruits);
fruits.shift();//delete from start
let shift = fruits.shift();// use to return the elemnt which we delete
console.log(shift);
console.log(fruits);

fruits.pop();  //delete from end and also return it
let pop = fruits.pop(); 
console.log(fruits);
console.log(pop);




let result = [10,20,45,68];
console.log(result.indexOf(20));

console.log(result.indexOf(80));

console.log(result.includes(20));
console.log(result.includes(50));

//concat mergr two arrays
console.log(result.concat(arr));

console.log(result.reverse());


//slice
console.log(result.slice());
console.log(result.slice(1));
console.log(result.slice(2,3));
console.log(result.slice(-2));


//splice 
let cars = ["bmw" ,"Fortuner","farari","mercedies"];
console.log(cars);
console.log(cars.splice(3));
console.log(cars);
console.log(cars.splice(1,3));
console.log(cars);
console.log(cars.splice(0,0, "XUV","Defender"));
console.log(cars);

//sorting
console.log(cars.sort()); 
let arr1 = [5,2,35,80,16];
console.log(arr1.sort()); 


//pr que
let month = ["january","july","march","august"];
let ans = month.splice(0,2,"july","june");
console.log(month);

let lang = ["c","c++","html","javascript","python","java","c#","sql"];

console.log(lang.reverse().indexOf("javascript"));
console.log(lang);


// array refernces
let arr2 = month;
console.log(month == arr2);

const arrr = [5,4,7,8];

//nested array
let nums = [[2,3],[4,6],[7,8]];
console.log(nums.length);
console.log(nums[0]);
console.log(nums[0][1]);

//tic tac toe
let tictactoe = [['X',null,'O'],[null,'X',null],['O',null,'X']];
console.log(tictactoe);












