import React from 'react'

export default function Cars(props) {
  return (
  <p>
    <img style={{borderRadius:"5%"}} src={props.img} />
    <h2>{props.name}</h2>
    <p>{props.age}</p>
  </p>
  )
}
