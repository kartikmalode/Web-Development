import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos ,settodos] = useState([{task:"sample task",id:uuidv4()}]);
    let [newTodo, setnewTodo] = useState("");
    
    let addnewTask =()=>{
        settodos((prevtodo)=>{
            return [...prevtodo,{task:newTodo, id:uuidv4()}];
        });
        setnewTodo("");

    }
    let updateTodovalue =(event)=>{
        setnewTodo(event.target.value);
    }
    let deletetodo=(id)=>{
        settodos(todos.filter((todo)=> todo.id != id));
    };

    let upperCaseall=()=>{
        settodos((prevtodo)=>(
            prevtodo.map((todo)=>{
                return{
                    ...todo, task:todo.task.toUpperCase(),
                };
            })
        ))
    }

    let uppCaseone =(id)=>{
        settodos((prevtodo)=>(
            prevtodo.map((todo)=>{
                if(todo.id ==id){
                return{
    
                    ...todo,task :todo.task.toUpperCase(),
                };
            }else{
                return todo;
            }
            })
        )
        )
    }




   return(
    <div>
        <input type="text" placeholder="add a task" onChange={updateTodovalue} value={newTodo} />
        <button onClick={addnewTask}>Add Task</button>
        <br /> <br />

        <h3>Todo List</h3>
        <ul>
            {
            todos.map((todo)=>(
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp; &nbsp;
            <button onClick={()=>deletetodo(todo.id)}>Delete</button>
            <button onClick={()=>uppCaseone(todo.id)}>uppCaseone</button>
            </li>
                ))
            }
        </ul>
        <br />
        <button onClick={upperCaseall}>UpperCaseAll</button>
    </div>
   );
}