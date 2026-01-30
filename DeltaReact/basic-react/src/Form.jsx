function submitform(event) {
    event.preventDefault(); // the event object and preventdefault is use to print the click evnt in console log when we submit the form when we dont use the preventdefault the form click event is display in console within only less than 1 sec only blink it one time
    console.log("form is submited..");
    
}
export default function Form(){
    return(
       <div>
        <form action="" onSubmit={submitform}>
            <input type="text" placeholder="write something" />
            <button>Submit</button>
        </form>
       </div>
    );
}