import { useState } from "react"
import "./index.css"

export default function App(){
  const [newitem, setnewitem] = useState("")
  const [todos, settodos] = useState([])
  function handlesubmit(e){
    e.preventDefault()

    settodos((currenttodos)=>{
      return[...currenttodos ,{id: crypto.randomUUID(), title : newitem, completed : false}]
    }
  )
  setnewitem("")
}
  function toggletodo(id,completed){
    settodos(currenttodos => {
      return currenttodos.map(todo => {
        if (todo.id === id){
          return {...todo , completed}
        }
        return todo 
      })
    })
  }
  function deletetodo(id){
    settodos(currenttodos => {
      return currenttodos.filter(todo => todo.id != id)
    })
  }
  
  console.log(todos)
  return (
    <>
    <form onSubmit={handlesubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value={newitem} onChange={e => setnewitem(e.target.value)} type="text" id="item"/>
      </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo list</h1>
  <ul className="list">
  {todos.length === 0 && "No Todos"}
    {todos.map(todo => {
      return(
      <li key={todo.id}>
        <label>
        <input type="checkbox" checked ={todo.completed} onChange={e => toggletodo(todo.id , e.target.checked)}/>
        {todo.title}
      </label>
      <button onClick={()=> deletetodo(todo.id)} className="btn btn-danger">Delete</button>
    </li>
      )
    })}
    </ul>
  </>
  ) 
}