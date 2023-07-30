 
import './App.css';
import {useState} from 'react';

export default function App() {

const [newItem , setNewItem] = useState("");
const [todos , setTodos] = useState([]);

function handleSubmit(e) {
  e.preventDefault();

  setTodos((currentTodos) =>{

    return [...currentTodos , {id : crypto.randomUUID(), title : newItem , completed : false} ]
  })

  setNewItem("");
}

function toggleTodo(id , completed)
{
  setTodos(currentTodos => {
    return currentTodos.map(todo => {if(todo.id === id){
      return {...todo , completed}
    }
    return todo
  })
  })
}

function deleteTodo(id){

  setTodos(currentTodos =>{
    return currentTodos.filter(todo => todo.id !== id)
  })
}

console.log(todos);
  return (
  <>
     
      
      <form className = "new-item-form" onSubmit={handleSubmit}>
        <div className = "form-row">
        <label>
          Add task 
        </label>

        <input type="text" id="item" value = {newItem}
        onChange={(e)=>{setNewItem(e.target.value)}}/>

        </div>
        <button className = "btn"> Add </button>
      </form>

      <h1 className = "header">To-Do List App</h1>
      <ul className ="list">
        {todos.map(todos => {
          return(
          <li key={todos.id}>
          <label>
            <input type="checkbox" checked={todos.completed}  onChange={e => toggleTodo(todos.id  , e.target.checkbox)}/>
            {todos.title}
          </label>
          <button className="btn btn-danger" onClick={()=>{deleteTodo(todos.id)}}>DELETE</button>
          </li>

          )
          
        })}
      </ul>
  </>
  );
}


