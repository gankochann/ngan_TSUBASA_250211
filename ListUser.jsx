import React from 'react'
import { useNavigate } from 'react-router';

export default function ListUser() {
    const users = [
        {
            id:1,
            userName: "nguyen van a",
            Email: "nva@gmail.com",
            Address: "ha noi",
        },
         {
            id:2,
            userName: "nguyen van b",
            Email: "nvb@gmail.com",
            Address: "ha nam",
        }, {
            id:1,
            userName: "nguyen van c",
            Email: "nvc@gmail.com",
            Address: "ninh binh",
        },
    ];
    const ListUser = ()=> {
        const navigate = useNavigate();
    };
  return (
    <div>
        {/* <div>id:{user.id}</div>
        <div>UserName:{user.userName}</div>
        <div>Email:{user.Email}</div>
        <div>Address:{user.Address}</div> */}
      {
            
      }
    </div>
  )
}
