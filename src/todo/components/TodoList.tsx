import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export const TodoList = () => {

  const {todoState} = useContext(TodoContext);

  console.log(todoState);
  
  return (
    <div>TodoList Component</div>
  )
}
