import React from 'react'

export default function UserInfo() {
    const person = {
        name : "nguyen van A",
        "gioi tinh" : "nam",
        "ngay sinh" :" 06/03/2024",
        email : "nva@gmail.com",
        "dia chi" : "thanh xuan , ha noi",
    }
  return (
    <div>
        <h1>thong tin ca nhan</h1>
        <ul>
            <li>ho va ten: {person.name}</li>
            <li>gioi tinh: {person['gioi tinh']}</li>
            <li>ngay sinh: {person['ngay sinh']}</li>
            <li>Email: {person.email}</li>
            <li>dia chi: {person['dia chi']}</li>
        </ul>
    </div>
  )
}
