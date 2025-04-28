let url4 = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector('button');
let country = "nepal";

btn.addEventListener('click',async()=>{
    let country = document.querySelector('input').value;
   console.log(country);
    let colleges = await getColloge(country);
    show(colleges);
})

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";

    for(col of colleges){
        console.log(col.name);
        let li = document.createElement('li');
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColloge(country) {
    try {
        let res = await axios.get(url4+country);
        return res.data;
    } catch (error) {
        console.log("error", error);
        return [];
    }
}