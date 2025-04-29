import React, { useState } from 'react'

export default function ToggleInfo() {
    const [show, setShow] = useState(true)
  return (
    <div>
        <h1>an/hien thong tin</h1>
        <button onClick={()=> setShow(!show)}>{show?'hien thi thong tin':'an thong tin'}</button>
        <p>{!show===true? 'chao mung ban den voi react, dey la van ba dieu tkhoen boi state': ''}</p>
    </div>
  )
}