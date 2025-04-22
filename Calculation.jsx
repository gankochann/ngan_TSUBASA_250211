import React from 'react'

export default function Calculation() {
    const a=10;
    const b=10;
    const addition =(a,b)=>{
        return a + b;
    };
    const subtraction = (a,b) =>{
        return a - b;
    };
    const multiplication = (a,b) =>{
        return a*b;
    };
    const division = (a,b) =>{
        return a/b;
    };

  return (
    <div>
        <h1>danh sach ket qua</h1>
        <ul>
            <li>{a} + {b} = {addition(a,b)} </li>
            <li>{a} - {b} = {subtraction(a,b)}</li>
            <li>{a} * {b} = {multiplication(a,b)}</li>
            <li>{a} / {b} = {division(a,b)}</li>
        </ul>
    </div>
  )
}
