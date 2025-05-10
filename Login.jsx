import React from 'react'
import Pic4 from './Img/Pic4.JPG'

export default function Login() {
  return (

         <div className='flex'>
       <img src={Pic4} alt=""  className='w-[500px] h-[500px]'/>
       <div className='w-[500px] h-[500px] p-[50px] border
border-gray-100'>
        <h1>Login</h1>
        <form>
            <label>E-mail</label> <br/>
            <input placeholder='placahoder contain' className='w-[400px] h-[50px] rounded  border
border-gray-300 p-[30px]'></input><br/>
            <label>Password</label><br/>
            <input placeholder='placahoder contain' className='w-[400px] h-[50px] rounded  border
border-gray-300 p-[30px]'></input><br/>
            <p className='flex justify-end'>fortgot password</p>
            <button className='bg-blue-500 text-white w-[400px] h-[50px] rounded '>Login</button>
            <hr/>
            <button className='bg-gray-500 text-white w-[400px] h-[50px] rounded '>Register now</button>


        </form>
       </div>
       </div>

  )
}

