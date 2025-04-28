let stud = {
    name:"kartik",
    age: 23,
    marks:82
};
console.log(stud);

const post = {
    username:"@kartikmalode",
    content:"this is my first post",
    likes: 100,
    tags: "@apna college"
};
console.log(post);

//get values
console.log(post.username);
//or
console.log(post["username"]);

//for variable
let user = "likes";
console.log(post[user]);

//js automatically converted key to string

const obj = {
    1:"a",
    2:"b",
    true:"c",
    null:"d"
};
console.log(obj[1]);//but not support obj.1 (in this case not convert the number to string)
console.log(obj[true]);


//add /update /delete
stud.gender = "male"; //add
console.log(stud);
stud.age = 21;// update
console.log(stud);
delete stud.age;  //delete
console.log(stud);



//nested objects

const classinfo = {
    kartik: {
           grade:"A+",
           city:"Sambhajinagar"
    },
    krushna:{
             grade:"O",
           city:"Jalna"
    },
    sandesh:{
           grade:"B",
           city:"Latur"
 
    }
}

console.log(classinfo);
console.log(classinfo.kartik);
console.log(classinfo.kartik.grade);



//array of object

const classInfo1=[
    {
          name:"kartik",
           age: 23,
           marks:82

    },
    {
        name:"abc",
        age: 22,
        marks:35
    },
    {
        name:"xyz",
        age: 25,
        marks:89
    }
];
console.log(classInfo1);
console.log(classInfo1[0]);
console.log(classInfo1[1].name);


//math object
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(5.5)); //5.5
console.log(Math.abs(-5.5)); //5.5
console.log(Math.pow(2,4));
console.log(Math.floor(5.5));//5 nearest smallest value
console.log(Math.floor(-5.5));  //-6
console.log(Math.ceil(5.5)); //6  largest value
console.log(Math.ceil(-5.5));  //-5
console.log(Math.random()); 


//random number 1 to 10
let random = Math.floor(Math.random()*10)+1;
console.log(random);

//random number 1 to 100
let random1 = Math.floor(Math.random()*100)+1;
console.log(random1);

//random number 1 to 5
let random2 = Math.floor(Math.random()*5)+1;
console.log(random2);

//random number 20 to 25
let random3 = Math.floor(Math.random()*5)+21;
console.log(random3);


