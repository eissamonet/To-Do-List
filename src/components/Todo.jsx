import React from 'react'
import todo_icon from '../assets/todo_icon.png'

const Todo = () => {
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex lex-colum p-7 min-h-[550px] rounded-xl'>

{/* ----------- Title -------- */}

    <div>
      <img className='w-8' src={todo_icon} alt="" />
      <h1 className='text-3xl font-semibold'>To-Do List</h1>
    </div>

{/* ----------- Input -------- */}

    <div className='flex items my-7 bg-gray-200 rounded-full'>
      <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task here'/>
      <button className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add +</button>
    </div>

{/* ----------- Tasks -------- */}



    </div>
  )
}

export default Todo
