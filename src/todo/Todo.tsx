//rafc
//useReducer is a hook from react

import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList"
import { TodoProvider } from "./context/TodoProvider"
import { useTodos } from "./hooks/useTodos";

export const Todo = () => {

  // const { toggleTodo } = useTodos();
  return (
    <TodoProvider>
      <Title></Title>
      <TodoList></TodoList>
    </TodoProvider>
  )
}
