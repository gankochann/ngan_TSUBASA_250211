import React from 'react'

export default function FlexTailwind() {
  return (
    <div className='size-full'>
        <h4 className='text-2xl font-bold'>Bo cuc cac phan tu trong trang</h4>
        <div className='flex justify-start gap-2'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o1</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o2</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o3</button>
        </div>
        <hr/>
        <h4 className='text-2xl font-bold'>cac phan tu nam ben trai</h4>
        <div className='flex justify-end gap-2'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o1</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o2</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o3</button>
        </div>
        <hr/>
        <h4 className='text-2xl font-bold'>cac phan tu nam ben phai</h4>
        <div className='flex justify-start gap-2'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o1</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o2</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o3</button>
        </div>
        <hr/>
         <h4 className='text-2xl font-bold'>cac phan tu nam o giua</h4>
         <div className='flex justify-between gap-2'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o1</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o2</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o3</button>
        </div>
        <hr/>
        <h4 className='text-2xl font-bold'>cac phan tu nam deu hai ben</h4>
        <div className='flex justify-around gap-2'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o1</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o2</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o3</button>
        </div>
        <hr/>
         <h4 className='text-2xl font-bold'>cac phan tu giua deu</h4>
        <div className='flex justify-evenly gap-2'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o1</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o2</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white w-[50px] h-[50px] rounded'>o3</button>
        </div>

    </div>
  )
}
