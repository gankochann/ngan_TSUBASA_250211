import React from 'react'
import AddToDo from './AddToDo'
import ToDoFilter from './ToDoFilter'
import ToDoList from './ToDoList'
import FooterAction from './FooterAction'




export default function ToDoForm() {
  return (
    <div className='flex-col flex items-center justify-center w-screen h-screen'>
      <div  className="h-[500px] flex-col flex items-center justify-center gap-[10px] w-[550px] border-4 border-gray-300 rounded-2xl">
    <h1 className='text-3xl'>quan ly cong viec</h1>
    <AddToDo/>
    <ToDoFilter/>
    <ToDoList/>
    <FooterAction/>
    </div>
    </div>
  )
}
