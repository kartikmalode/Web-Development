//q1

let arr = [2,3,1,4,5,6,10,11];
let num = 5;

function largenum(arr,num){
    for(let i = 0; i<arr.length; i++){
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}

console.log(largenum(arr , num));

//Q2

let str = "abcdabcdefggh";

function getuniqestr(str){
    let ans = "";

    for(let i=0; i<str.length; i++){
        let cuurchar = str[i];
        if (ans.indexOf(cuurchar)==-1) {
            ans += cuurchar;
        }
    }
    return ans;
}
console.log(getuniqestr(str));

//q3
let country = ["india", "austrelia","united states of america"];

function longestcountry(country){
    let ansidx = 0;
    for(let i=0; i<country.length; i++){
        let anslen = country[ansidx].length;
        let currlen = country[i].length;
        if(currlen>anslen){
            ansidx = i;
        }
    }
    return country[ansidx];
}
console.log(longestcountry(country));

//Q4
let str1 = "apancollege";

function countvowel(str1){
    let count = 0;
    for(let i=0; i<str1.length; i++){
        if(str1[i]=='a' ||
            str1[i]=='e' ||
            str1[i]=='i' ||
            str1[i]=='o' ||
            str1[i]=='u' 

        ){
          count++;
        }
    }
    return count;
}
console.log(countvowel(str1));

//Q5;

let start = 100;
let end = 500;

function randomnum(start,end){
    let diff = end -start;
    return Math.floor(Math.random()*diff)+start;
}
console.log(randomnum(start,end));