//1
let arr = [1,2,3,4,5,6,2,3];

for(let i = 0; i<arr.length; i++){
    if(arr[i] !=2){
        console.log(arr[i]);
    }
}
//2
let number = [2,8,7,1,5,2];
let count = 0;
for(let i = 0; i<number.length; i++){
    count++;
}
console.log("total count "+count);

//3

let num = 287152;
let sum = 0;
let copy = num;

while(copy>0){
   let digit = copy%10;
   sum += digit;
   copy = Math.floor(copy/10);
}
console.log(sum);

//4

let n = 5;
let fact = 1;

for(let i=1; i<=n; i++){
    fact *=i;
}
console.log(fact);


//5
let arr1 = [1,2,3,40,5,60,2,3];
let largest =0;

for(let i= 0; i<arr1.length; i++){
    if(largest<arr1[i]){
        largest = arr1[i];
    }
}
console.log(largest);