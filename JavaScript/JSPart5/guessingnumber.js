let max = prompt("enter the max number");

let random = Math.floor(Math.random()*max)+1;

let guess = prompt("guess the number");

while(true){
    if (guess=='quit') {
        console.log("you are quit");
        break;
    }

    if (guess == random) {
        console.log("you are right! congrats!"+random);
        break;

    }else if(guess < random){
       guess = prompt("hint :your guess number is small");

    }else{
        guess = prompt("hint :your guess number is large");
    }
}