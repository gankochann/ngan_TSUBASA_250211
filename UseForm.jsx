import React, { useState } from 'react'

export default function UseForm() {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[age, setAge] = useState('')
  return (
    <div style={{paddingLeft:"300px"}}>
        <h1>thong tin nguoi dung</h1>
        <form onSubmit={(e)=> e.preventDefault()}>
            <label><b>ho va ten:</b></label><br></br>
            <input style={{width:500,height:40}} type='text' placeholder='nhap ho ten...' name='name' onChange={(e)=> setName(e.target.value) }></input>
            <br></br>
            <label><b>Email:</b></label><br></br>
            <input style={{width:500,height:40}} type='text' placeholder='nhap email...' name='email' onChange={(e) => setEmail(e.target.value)}></input>
            <br></br>
            <label><b>tuoi:</b></label><br></br>
            <input style={{width:500,height:40}} type='number' placeholder='nhap tuoi...' name='age' onChange={(e) => setAge(e.target.value)}></input>
            <br></br>
            <hr></hr>
            <button style={{backgroundColor:"blue", color:"white" , borderRadius:"8%", width:500,height:40,}} onClick={()=> console.log({name: name, email:email, age:age})}>gui</button>
        </form>
    </div>
  )
}
