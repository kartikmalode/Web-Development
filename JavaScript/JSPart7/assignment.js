let arrayAverage= (arr) =>{
    let total = 0;
    for(let num of arr){
        total += num;
    }
    return total/arr.length;
} ;

let arr  = [2,4,6,8];
console.log(arrayAverage(arr));


//Q2

let num = 4;

const isEven=(num) => num%2 ==0;

console.log(isEven(num));