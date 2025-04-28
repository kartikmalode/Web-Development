//array methods

//for each
let arr = [2,3,4,5,7,10,12,15];

arr.forEach(function(el){
    console.log(el);
});

//map 
let double = arr.map((el2)=>{
  return el2 * el2;
});
console.log(double);

//filter method
let even = arr.filter((num) => {  // used to filter the value
    return num %2 ==0;
});

console.log(even);


//every
let evry = arr.every((n)=>(n%2 ==0));   // if all elements are even print true else false
console.log(evry);

let som = arr.some((n)=>(n%2 ==0));   // works on logical OR
console.log(som);

//reduce

let nums = [1,2,3,4,1];
let finalval = nums.reduce((res,ele) => (res+ele));
console.log(finalval);

//maximun of array
let ans = nums.reduce((max,elem) =>{
  if(elem >max){
    return elem;
  }else{
    return max;
  }
});
console.log(ans);

//pr multiple of 10 or not
let num1 = [10,20,30,40,5];

let ans1 = num1.every((elm) => (elm%10) ==0);
console.log(ans1);

//minimum of array
function getMin(num1){
  let min = num1.reduce((min,nm) => {
    if(nm <min){
      return nm;
    }else{
      return min;
    }
  });
  return min;
}

console.log(getMin(num1));

//default parameters
function sum(a,b=2){  //sum(a=2,b) -this is not allow in javascrpt
  return a+b;
}
console.log(sum(4));//6  //value assigning only first parameter

//spread
console.log(..."kartikmalode");
console.log(...nums);


//spread with array literls
let newarr = [...nums,...num1];
console.log(newarr);

//spread with object literls
const data ={
  name: "kartik",
  email: "kattik@25@gmail.com"
};
const datacopy = {...data,id:123};
console.log(datacopy);

//rest

function sum1(...args){
  return args.reduce((sum,el)=> sum+el);
}
console.log(sum1(5,15));

//Destructuring

let names = ["kartik","ajay","vijay","pranay"];

let[winner,ruunerup, ...others]= names;

console.log(winner);
console.log(ruunerup);
console.log(others);


//destructing object
const student ={
  name:"kartik",
  email:"kartikmalode121@gmail.com",
  id:3,
  marks:85,
  password :12345,
  mobno:113456789
};
let {name:user,password:pass } = student;
console.log(user);
console.log(pass);