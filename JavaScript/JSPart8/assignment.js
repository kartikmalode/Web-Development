let arr = [2,4,3,5,7,6];
const square = arr.map((num) => num*num);
console.log(square);

let sum = arr.reduce((acc,num) =>acc+num,0);

let avg = sum/arr.length;
console.log(avg);

//q2
let newarr = arr.map((n) => n+5);
console.log(newarr);

let str = ["Ajay","kartik","Krushna","prakash"];
let newstr = str.map((string) => string.toUpperCase());
console.log(newstr);

const doubleAndReturnargs = (arr , ...args) => [
    ...arr,
    ...args.map((v) => v*2),
];
console.log(doubleAndReturnargs([1,2,3],4,4));
console.log(doubleAndReturnargs([2],10,4));


const mergeobject = (obj1,obj2) =>({...obj1,...obj2});
console.log(mergeobject({a:1,b:2},{c:3,d:5}));
