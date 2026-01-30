
import "./App.css";
// import Title from "./Title.jsx";
import Msgbox from "./Msgbox.jsx";
import Button from "./Button.jsx";
import Form from "./Form.jsx";


function App(){
  let option = ["hi-tech","durable","fast"];
  let options = {a:"hi-tech",b:"fast",c:"durable"};
  return(
    /*attributes are props in react*/
    <>
    {/* <Title title = "phone" price = {50000} features ={option} ></Title>  
    <Title title = "pen" price ={5} features = {option}></Title>
    <Title title="pencil" features ={option}></Title> */}
    <Button/>
    <Form/>
    <Msgbox userName ="Kartik" textColor = "yellow" />
    <Msgbox userName ="Ajay" textColor = "red"/>
    </>

  );
}

export default App;