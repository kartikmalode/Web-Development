let arr3 = [7,9,0,-2,7,8];
let n = 3;

let ans1 = arr3.slice(0,n);
console.log(ans1);
console.log(arr3.slice(arr3.length-n));


let str1 = prompt("enter a string");

if(str1.length == 0){
    console.log("empty");
}else{
    console.log("not empty");
}

let char = "apnACollege";
let idx = 3;
if (char[idx]==char[idx].toLowerCase()) {
    console.log("lowercese");
} else {
    console.log("not lowercese");
}

console.log(`origional string ${str1} `);
console.log(`without space string ${str1.trim()} `);



let arry = ["hello", 'a', 23, 64, 99,-6];
 let item = 44;
 if(arry.indexOf(item) !=-1) {
    console.log("element exists in array");
 } else {
 console.log("element doesn't exist in array");
 }
