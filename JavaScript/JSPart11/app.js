//breakpoints and callstack

//js is a single threded -asynchronous nature

function one(){
    return 1;
}

function two(){
    return one()+one();
}

function three(){
    let ans = two()+one();
    console.log(ans);
}

three();

h1 = document.querySelector('h1');
//callback nesting -callback hell
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
        },delay);
    })
    
}

changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was completed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue color was completed");
   
})

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("blue",1000);
//         })
//     })
// })

// function saveDB(data,success,failure){
//     let internetspeed = Math.floor(Math.random()*10)+1;
//     if (internetspeed >4) {
//         success();
//     }else{
//         failure();
//     }
// }

// saveDB("apna collge",()=>{
//     console.log("success: your data was saved");
//     saveDB("hello",()=>{
//         console.log("success2: your data2 was saved");

//     },()=>{
//         console.log("failure2: your data2 was not saved");

//     })
// },
// ()=>{
//     console.log("failure: your data was not saved");
// });

//using promises

// function saveDB(data){
//     return new Promise((resolve,reject)=>{
//         let internetspeed = Math.floor(Math.random()*10)+1;
//         if (internetspeed >4) {
//             resolve("success");
//         }else{
//             reject("failure");
//         }
//     });
    
// }


// saveDB("apna colloge")
// .then((result)=>{
//     console.log("data1 saved");
//     console.log("result of promise : ",result );
//     return saveDB("hello");
// })
// .then((result)=>{
//     console.log("data2 saved");
//     console.log("result of promise : ",result );

// return saveDB("kartik");
// })
// .then((result)=>{                                       //promise chaining
//     console.log("data3 saved");
//     console.log("result of promise : ",result );


// })
// .catch((error)=>{
//     console.log("promise was rejected");
//     console.log("result of promise : ",error );

// });