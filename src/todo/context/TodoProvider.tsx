// import React from 'react'
//react 17 its not necesary

import { JSX, useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [{
        id: '1',
        desc: 'Recoletar las piedras del infinito',
        completed: false
    }, {
        id: '2',
        desc: 'Pirdra del alma',
        completed: false
    }],
    completed: 0,
    pending: 2
}



interface props {
    children: JSX.Element | JSX.Element[]
}

//High order component, recibe los hijos que seran renderizados
export const TodoProvider = ({children}: props) => {
  
  const [todoState, dispach] = useReducer(todoReducer, INITIAL_STATE)
  
  return (
    <TodoContext.Provider value={{
        todoState
    }}>
        {
            children
            //All components
        }
    </TodoContext.Provider>
  )
}
