//running the node file - node filename.js


// let n = 5;

// for(let i=0; i<=n; i++){
//     console.log(i);
// }

let args = process.argv;

for(let i =2; i<args.length; i++){
    console.log("hello to "+args[i]);
}


const somevalue = require('./math');
console.log(somevalue);
console.log(somevalue.sum(2,2));


//export in directories

const info = require("./Friuits");

console.log(info);
