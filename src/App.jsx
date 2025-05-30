import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import ToDoList from './components/TodoList'
import { TodoContext,useTodo } from './context'

function App() {
  const[todoList,setTodoList] = useState([]);

  const addTask = (item) => {
    setTodoList((prev) => ([...prev,{...item,id:Date.now()}]))
    console.log(todoList)
  }

  const editTask = (id,item) => {
    setTodoList((prev) => (prev.map((t) => t.id === id ? item : t)))
  }

  const deleteTask = (id) => {
    setTodoList((prev) => (prev.filter((t) => t.id !== id)))
  }

  const toggleCompleteTask = (id) => {
    setTodoList((prev) => (prev.map((t) => t.id === id ? {...t,completed:!t.completed} : t)))
  }

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("todoList"))
    if(list && list.length>0) setTodoList(list)
  },[])

  useEffect(() => {
    localStorage.setItem("todoList",JSON.stringify(todoList))
  },[todoList])
  return (
    <TodoContext.Provider value = {{addTask,deleteTask,editTask,toggleCompleteTask}}>
    <div className='mb-5 p-2  bg-[#8597c6] rounded-lg'>
      <h1 className='text-4xl md:text-6xl text-white'>To-Do List</h1>
    </div>
     <div className='max-w-2xl w-full rounded-2xl shadow-2xl shadow-blue-950 
     h-full min-h-2/3 bg-[#ccd4dbb3] backdrop-blur-xs p-5 overflow-y-auto'>
      {/* Task Form Div */}
      <div className='border-2 border-[#8597c6] rounded-sm m-5 py-3 px-2 
      shadow-2xs'>
        <TodoForm />
      </div>
      {/* Todo List */}
      <div>
        {todoList.map((item) => (
          <ToDoList item={item}/>
        ))}
      </div>
     </div>
     <div className='mt-2 text-[#2f3e63]'>
      Developed with 🩵 by <span className="font-semibold ">Shubhrati Patel</span>
     </div>
    </TodoContext.Provider>
  )
}

export default App
