
import React, { useReducer } from 'react'

export default function Manageform() {

 const[state, dispatch] = useReducer(reducer, {name:"",email:""});

  function reducer (state, action){
    switch(action.type){
        case 'name':
            return {...state, name: action.payload};
            case'email':
            return {...state, email:action.payload};
            default:
                return state;
    }
  }
const handleSubmit=(e) => {
    e.preventDefault();
    console.log("ho ten:", state.name);
    console.log("email:", state.email);
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>ho ten:</label><br/>
            <input onChange={(e)=> dispatch({type: 'name', payload:e.target.value })}></input><br/>
            <hr></hr>
            <label>Email:</label><br/>
            <input onChange={(e)=> dispatch({type:'email', payload:e.target.value})}></input><br/>
            <hr></hr>
            <button type='submit'>send</button>
        </form>
    </div>
  )
}
