import React from 'react'
import { Button } from 'react-bootstrap'


export default function AddToDo() {
  return (
   <div>
     <div className='flex  border-gray-300 border-[1px] p-4 rounded-[5px] w-[500px] items-center justify-center '>
      <form className='w-[300px] flex-col  border-gray-500 flex items-center justify-center '>
        <input placeholder='nhap ten cong viec vao day' type='text' className='w-[500px] h-[50px] rounded-md border-gray-500 border-2 ' /><br/>
        <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer w-[500px] h-[50px]' > them cong viec</button>
      </form>
    </div>
   </div>
  )
}
