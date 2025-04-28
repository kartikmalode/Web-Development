let todo = [];

let req = prompt("please enter the request");

while(true){
    if(req == "quit"){
        console.log("you are quit");
        break;
    }else if(req == 'list'){
        console.log("----------");
        for(let i = 0; i<todo.length; i++){
            console.log(i,todo[i]);
        }
        console.log("----------");
    }else if(req =='add'){
        let task = prompt("please enter the tast you want to add");
        todo.push(task);
        console.log("task added");
    }else if(req == 'delete'){
        let idx = prompt("enter the idx which task you delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("wrong request");
    }
     req = prompt("please enter the request");
}