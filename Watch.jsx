import React, { useRef, useState } from 'react'

export default function Watch() {
    const timeId = useRef();
    const[time, setTime] = useState(0);
    const handleStart = ()=>{
        timeId.current = setInterval(()=>{
            setTime((prev)=> prev+1)
        }, 1000);
    };

    const handlePause = ()=>{
        clearInterval(timeId.current);
    };
    const handleStop =()=>{
        clearInterval(timeId.current);
        setTime(0);
    }
  return (
    <div>
        <p>{time} giay</p> 
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStop}>Reset</button>
    </div>
  )
}
