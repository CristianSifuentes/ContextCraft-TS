//Distribuir la información del estado o informaicón compartida de los conponentes
//sin importar que anidada estan los componentes
import { createContext } from "react";
import { Todo, TodoState } from "../interfaces/interfaces";

//Provedor es usado para comparti información en los componentes hijos

//Crear provedor de informacion
// export const TodoContext = () => createContext({
//     // todoState: {
//     //     todo: [],
//     //     completed: 2
//     // }
// });

export type TodoContextProps = {
    todoState:TodoState
}
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);
