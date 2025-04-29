import React, { useState } from 'react'

export default function RandomNumber() {
    const[randomNumber, setRandomNumber] = useState(0)
    const handleNumber = ()=>{
        const number = Math.ceil(Math.random() * 10);
        setRandomNumber(number);
    }
  return (
    <div style={{paddingLeft:300}}>
        <h1>tao so ngau nhien 1 - 10</h1>
        <button style={{backgroundColor: "blue", color:"white" , borderRadius: "10%"}} onClick={handleNumber}>tao so</button>
        <p>{setRandomNumber === 0 ?"chua co so nao duoc tao ": `so cua ban la ${randomNumber}`}</p>
    </div>
  )
}
