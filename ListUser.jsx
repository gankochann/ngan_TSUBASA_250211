import React from 'react'
import { useNavigate } from 'react-router';
import { users } from '../data/users';

export default function ListUser() {
    const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center h-screen'>
       <div className='flex gap-[20px]'>
        {users.map((item) => (
         <div key={item.id} className='border-[2px] border-black w-fit p-[12px]'>
            <p>Id:{item.id}</p>
            <p>UserName:{item.userName}</p>
            <p>Email:{item.Email}</p>
            <p>Address:{item.Address}</p>
            <button className='bg-blue-600 text-white w-full rounded-[5px]' onClick={()=> navigate(`/detail/${item.id}`)}>xem chi tiet</button>
         </div>
        ))}
       </div>
     
    </div>
  )
}
