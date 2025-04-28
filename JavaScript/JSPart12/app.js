async function greet() {
    // throw "weak connection";
    return "hello";
}

greet()
.then(()=>{
    console.log("promise resolved");
})
.catch(()=>{
    console.log("promise rejected");
})

let demo = async()=>{
    return 5;
}


//await function
function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000)
    });
}

async function demo1(){
   await getNum();
   await getNum();
   await getNum();

    getNum();

}
console.log(demo1());


h1 = document.querySelector('h1');
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            if (num >3) {
              reject("promise rejected");  
            }
            h1.style.color = color;
            console.log(`color is set to : ${color}`);
            resolve("color changed");
        },delay);
    })
    
}

async function color() {
    try{
    await changeColor("red",1000);
    await changeColor("orange",1000);
    await changeColor("green",1000);
     changeColor("blue",1000);
    }catch(err){
        console.log("error caught");
        console.log(err);
    }

    let a=5;
    console.log(a);
    console.log(a+3);
}
color();


//API and JSON

let jsonres = 
 '{"fact": "After the Eiffel Tower was built, one person was killed during the installation of the lifts. No one was killed during the actual construction of the tower"}'; 
  
let validres = JSON.parse(jsonres);
console.log(validres.fact);

let stud = {
    name:"kartik",
    age:21
};
console.log(JSON.stringify(stud));


let url = "https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);

})


// let btn = document.querySelector("button");

// btn.addEventListener('click',async()=>{
//     let fact = await getfacts();

//     let p = document.querySelector('#fact');
//     p.innerText = fact;
// });
// async function getfacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }catch(err){
//           console.log("error"+err);
//           return "no fact found";
//     }
// }

let url2 = "https://dog.ceo/api/breeds/image/random"

let btn = document.querySelector("button");
btn.addEventListener('click',async()=>{
    let link = await getImage();
    let img = document.querySelector("#img");
    img.setAttribute("src",link);
});

async function getImage() {
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }catch(err){
          console.log("error"+err);
          return "/";
    }
}


let url3 = "https://icanhazdadjoke.com";

async function getJoke() {
    try{
    let config = {headers:{Accept:"application/json"}};
    let res = await axios.get(url3,config);
    console.log(res.data);
    }catch(err){
        console.log(err);
    }
}
getJoke();




