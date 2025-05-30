import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoForm() {
    const [item , setItem] = useState("")
    const {addTask} = useTodo()

    const add = (e) => {
        e.preventDefault();
        console.log("Enter add")
        if(!item) return;
        addTask({task:item,completed:false})
        setItem("")
    }
  return (
    <form className='flex justify-between gap-6'
    onSubmit={add}>
      <input className='border:none w-full hover:cursor-text focus:outline-none 
      border-b-2 border-transparent focus:border-[#8597c6] text-[#2d507d]'
      placeholder="Enter Task" 
      value={item}
      onChange = {(e) => setItem(e.target.value)}
      />
      <button className='py-1 px-3 w-auto bg-[#8597c6] rounded-sm text-white'
      >Add</button>
    </form>
  )
}

export default TodoForm
