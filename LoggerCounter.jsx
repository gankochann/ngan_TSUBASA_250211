import React, { useEffect, useState } from 'react'

export default function LoggerCounter() {
    
    const[ count,setCount] = useState(0);
    const handleIncrean = ()=>{
        setCount((prev)=> prev+1);
    }
    useEffect(()=>{
        console.log("Component da duoc tao");
    },[count]);
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrean}>incream</button>
        {console.log("so hien tai la:", count)}
    </div>
  )
}
