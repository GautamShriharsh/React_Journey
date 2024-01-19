import React from "react";
import {createContext, useContext} from React

export const TodoContext = createContext({
     todos: [
       {
        id: 1,
        todo: "Todo msg",
        completed: false,
       }
     ],
     addTodo: (todo) => {},
     updateTodo: (id, todo) => {},
     deleteTodo: (id) => {},
     toggleComplete: (id) => {}

})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider