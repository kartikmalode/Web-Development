//if statement
let color= 'red';
if(color =='red'){
    console.log("stop");
}
if(color =='yellow'){
    console.log("slow");
}
if(color =='green'){
    console.log("to go");
}

//else if
let age = 20;
if(age >=18){
    console.log("you can vote");
} else if(age <18){
    console.log("you cannot vote");
}

//else 

if(age >=18){
    console.log("you can vote");
} else {
    console.log("you cannot vote");
}

// practice question
let size = "XL";
if (size ==="XL") {
    console.log("price is 250RS");
}else if(size=== "L"){
    console.log("price is 200RS");
}
else if(size=== "M"){
    console.log("price is 100RS");
}else if(size=== "S"){
    console.log("price is 50RS");
}else{
        console.log("invalid amount");
    
}


//nested if else
let marks = 80;
if (marks >=33) {
    console.log("pass");
    if(marks >=80){
        console.log("O");
    }else{
        console.log("A");
    }
}else{
    console.log("better luck for next time");
}

//swtich case

let day = 3;
switch(day){
    case 1:
    console.log("Sunday");
    break;
    case 2:
    console.log("Monday");
    break;
    case 3:
    console.log("Tuesday");
    break;
    case 4:
    console.log("Wensday");
    break;
    case 5:
    console.log("Thursday");
    break;
    case 6:
    console.log("friday");
    break;
    case 7:
    console.log("Saturday");
     break;
    default :
    console.log("Invalid input");


}

