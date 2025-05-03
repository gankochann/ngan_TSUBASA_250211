import React, { useState } from 'react'

export default function BgColor() {
    const colors = ["red","blue","green", "orange","pink"];
    const[bgcolor, setBgColor] = useState("white");
    const handleChangeColor = ()=>{
        const IndexColor = colors[Math.floor(Math.random()*colors.length)];
        setBgColor(IndexColor);
    }
  return (
    <div>
        <div style={{width:200, height:200, backgroundColor:bgcolor, borderRadius:"8%"}}></div>
        <button onClick={handleChangeColor}>ChangeColor</button>
    </div>
  )
}
