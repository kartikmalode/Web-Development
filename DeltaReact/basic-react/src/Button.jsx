function printhello(){
    console.log("hello");
}

function printby(){
    console.log("bye");
}

function onmousehover(event){
    console.log(event);
    console.log("this is paragraph");
}

export default function Button(){
    return(
        <div>
            <button onClick={printhello}>Click</button>
            <p onClick={printby}>this is demo of onclick event in react</p>
            {/* non clicking event*/}
            <p onMouseOver={onmousehover}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, neque alias! Dolores deleniti ducimus ea alias soluta minima dolorem est quia deserunt, corporis, commodi doloribus repudiandae porro dolorum debitis quis!</p>
        </div>
    );
}