
import React, { useState } from 'react'

export default function CounText() {
    const[counnt, setCount] = useState(0)
    const[text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value);
        setCount(e.target.value.length);
    }

  return (
    <div style={{paddingLeft:200}}>
        <textarea style={{width:500 , height:200}} placeholder='moi nhap vao noi dung...' name='name' value={text} onChange={(e)=> handleChange(e)}></textarea>
        <h2>so ky tu: {counnt}</h2>
    </div>

  )
}
