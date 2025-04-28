let num = 10;
if (num %10==0) {
    console.log("good");
} else {
    console.log("bad");
}

//q2
let name = prompt("enter name");
let age1 = prompt("enter age");

alert(`${name} is ${age1} years old`);

//Q3
let quater=2;

switch(quater){
    case 1:
        console.log("January, February March");
        break;
        case 2:
        console.log("April, May, June");
        break;
        case 3:
        console.log("July, August, September");
        break;
        case 4:
        console.log("October, November, December");
        break;
        default:
            console.log("Invalid");
}
//q4
let str1 = "apple";
if((str1[0]==='A' ||str1[0]==='a')&& str1.length >5 ){
    console.log("golden string");
}else{
    console.log("not golden string");
}

//q5

let x  = 10;
let y = 20;
let z = 35;
if (x >y) {
    if (x>z) {
        console.log(x+"is greater");
    } else {
        console.log(z+"is greater");
    }
    
} else {
    if (y>z) {
        console.log(y+"is greater");
    } else {
        console.log(z+"is greater");
    }
}

//q6

let n1 = 32;
let n2 = 4536;

if ((n1 %10)==(n2%10)) {
    console.log("laast digit is same "+(n1%10));
} else {
    console.log("laast digit is not same");
}
// if (n1[n1.length-1]===n2[n2.length-1]) {
//     console.log("laast digit is same");
// } else {
//     console.log("laast digit is not same");

// }