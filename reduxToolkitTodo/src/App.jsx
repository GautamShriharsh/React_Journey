import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
// import TodoReducer from './features/todo/todoSlice'

function App() {
 

  return (
    <>
     <h1>Todo Using React and Redux toolkit</h1>
     <AddTodo />
     <Todos />
    </>
  )
}

export default App
