import { useState } from "react";


export default function LudoBoard(){
    let [moves, setMoves] = useState({blue:0,yellow:0,green:0, red:0});  //object & state in react
    let [arr, setArr] =useState([" no moves "]);  // array in state

    let updateBlue=()=>{
        console.log(`moves.blue ${moves.blue}`)
      setMoves((preMoves)=>{
        return {...preMoves, blue:preMoves.blue +1 }
      });

      setArr((prearr)=>{
        return [...prearr, " blue moves "];

      });
       console.log(arr);
};

   
  let updateyellow=()=>{
        setMoves((preMoves)=>{
        return {...preMoves, yellow:preMoves.yellow +1 }
      });
};
let updategreen=()=>{
        setMoves((preMoves)=>{
        return {...preMoves, green:preMoves.green +1 }
      });
};

    let updatered=()=>{
       setMoves((preMoves)=>{
        return {...preMoves, red:preMoves.red +1 }
      });
    }
    return (
        <div>
            <p>Games Begin</p>
            <p>&nbsp; &nbsp;{arr}</p>
            <div className="ludoboard">
                <p>Blue Board ={moves.blue} </p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow Board ={moves.yellow} </p>
                <button style={{backgroundColor:"yellow"}} onClick={updateyellow}>+1</button>
                <p>Green Board ={moves.green} </p>
                <button style={{backgroundColor:"green"}} onClick={updategreen}>+1</button>
                <p>Red Board = {moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updatered}>+1</button>
            </div>
        </div>
    );
}
