import React from 'react'
import "../page/Demo.css"
export default function ColorBox() {
    const styleInline = {
        backgroundColor : "blue",
        height:"200px" ,
        width:"200px",
    }
  return (
    <div>
        <h1>color box</h1>
        <div style={{backgroundColor : "red", height:"200px" , width:"200px" }}>box1</div>
        <div className='div'>box2</div>
        <div style={styleInline}>box3</div>
    </div>
  )
}
