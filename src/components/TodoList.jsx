import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoList({item}) {
    console.log(item)
    const [isEditable,setIsEditable] = useState(false)
    const [task,setTask] = useState(item.task)
    const {editTask,deleteTask,toggleCompleteTask} = useTodo();

    const edit = () => {
        editTask(item.id,{...item,task:task})
        setIsEditable(false)
    }
    return (
        <div className={`my-4 mx-5 p-2 flex gap-x-3 border border-[#8597c6]
        ${item.completed ? "bg-[#b7d8bd]" : "bg-[#aeb9d4]"}`}>
        <input 
        type='checkbox'
        checked = {item.completed}
        onChange={() => toggleCompleteTask(item.id)}/>

        <input className={`w-full focus:outline-none border-b-2 text-[#2d507d]
        ${isEditable ? "border-[#8597c6]":"border-transparent"}
        ${item.completed ? "line-through" : ""}`}
        value={task}
        readOnly={!isEditable}
        onChange={(e) => setTask(e.target.value)}/>
        <button className={`${item.completed ? " bg-[#4e8148]" : "bg-[#8597c6]"} 
        px-2 rounded-sm text-white`}
        onClick={() => {
            if(item.completed) return;
            if(isEditable){
                edit()
            }
            else{
                setIsEditable((prev) => !prev)
            }
        }}>{isEditable? "Save" : "Edit"}</button>
        <button className='bg-[#3b4256] px-2'
        onClick={() => deleteTask(item.id)}>🗑️</button>
        </div>
    )
}

export default TodoList
