import { useEffect, useState } from "react"
import "./index.css"
import { Newtodo } from "./newtodoform"
import { Todolist } from "./todolist"
export default function App() {
  const [todos, settodos] = useState(() => {
    const localvalue = localStorage.getItem("ITEMS")
    if (localvalue === null) return []
    
    return JSON.parse(localvalue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos])

  function addtodo(title) {
    settodos((currenttodos) => {
      return [...currenttodos, { id: crypto.randomUUID(), title, completed: false }]
    }
    )
  }

  function toggletodo(id, completed) {
    settodos(currenttodos => {
      return currenttodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }
  function deletetodo(id) {
    settodos(currenttodos => {
      return currenttodos.filter(todo => todo.id !== id)
    })
  }

  console.log(todos)
  return (
    <>
      <Newtodo onSubmit={addtodo} />
      <h1 className="header">Todo list</h1>
      <Todolist todos={todos} toggletodo={toggletodo} deletetodo={deletetodo} />
    </> 
  )
}