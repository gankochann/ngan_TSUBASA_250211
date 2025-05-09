import React from 'react'

export default function Login() {
  return (
    <div className='w-[500px] h-[400px] justify-center px-[10px] rounded-md  bg-gray-200' >
        <div className='w-[450px] h-[150px]  bg-gray-200'>
        <h1 className='text-[30px] font-bold'>Login account</h1><br/>
        <label/><b>Your email</b> <br/>
        <input placeholder='name@gmail.com' className='border-[1px] bg-white text-black p-2 rounded-md w-[400px] h-[50px]'></input><br/>
        </div>
        <div className='w-[450px] h-[200px] bg-gray-200 ' >
            <label/><b>Password</b>
        <input placeholder='********'className='border-[1px]  bg-white text-black p-2 rounded-md w-[400px] h-[50px]' ></input><br/>
        <br></br>
        <button className='bg-blue-500 text-white w-[400px] h-[50px] rounded-md'>Login an account</button>
        <br></br><br></br>
        <p>Already have an acccount? <b>Register here</b></p>
        </div>
    </div>
  )
};
