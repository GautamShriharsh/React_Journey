import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {} from '../features/todo/todoSlice'

function Todos() {
 const todos =  useSelector(state => state.todos)
 const dispatch = useDispatch()
  
  return (
    <>
      <div>Todos</div>
    </>
  )
}

export default Todos
