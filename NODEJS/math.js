const sum = (a,b) => a+b;    //we can also use module.exports
const mul = (a,b) => a*b;
const sub = (a,b) => a-b;

const PI = 3.14;


let obj = {    //we can also use module.exports ={  }
    sum: sum,
    mul: mul,
    sub: sub,
    PI: PI
};
module.exports = obj;