import {useContext,createContext} from 'react'

export const TodoContext = createContext({
    todoList : [
        {
            id : Date.now(),
            task : "Create Website",
            completed : false
        }
    ],
    addTask : (item) => {},
    editTask : (id,item) => {},
    deleteTask : (id) => {},
    toggleCompleteTask : (id) => {}

})

export const useTodo = () => {
    return useContext(TodoContext)
}
