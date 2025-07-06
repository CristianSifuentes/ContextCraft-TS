//rafc

import { TodoProvider } from "./context/TodoProvider"

export const Todo = () => {
  return (
    <TodoProvider>
      <h1>Todo: </h1>
      <ul>
        <li>TODO 1</li>
        <li>TODO 2</li>
        <li>TODO 2</li>

      </ul>
    </TodoProvider>
  )
}
